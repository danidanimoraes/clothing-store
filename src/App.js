import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.components';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsArray } from './redux/shop/shop.selectors';

// Saves state of the user
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          // data of user just created or already existing user
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      }
      this.props.setCurrentUser(userAuth);

      // Used to add shop data to Firestore only once. Keeping it for learning purposes.
      // const objectsToAdd = this.props.collectionsArray.map(({ title, items }) => ({ title, items }))
      // addcollectionAndDocs('collections', objectsToAdd)

    });
  }

  componentWillUnmount() {
    // Closes the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin"
            render={() => this.props.currentUser ?
              (<Redirect to="/"></Redirect>)
              : (<SignInUp></SignInUp>)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsArray
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
