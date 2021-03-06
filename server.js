const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Needs the secret key used by dotenv
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// body parser converts to json to any request
app.use(bodyParser.json());

// makes sure that URLs don't have forbidden characters
app.use(bodyParser.urlencoded({ extended: true }));

// Cross Origin Requests (front has port 3000, server 5000)
app.use(cors());



if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));

    // serves static files when we are in production (html/css/js)
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        // all our front end code is in index.html
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    });
}

app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server running on port " + port);
});

app.get('/service-worker.js', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js')))
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if (stripeError) {
            res.status(500).send({ error: stripeError });
        }
        else {
            res.status(200).send({ success: stripeResponse });
        }
    });
})