import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Saves state of the user
class App extends React.Component {
  unsubscribeFromAuth = null;
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          // data of user just created or already existing user
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    // Closes the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
