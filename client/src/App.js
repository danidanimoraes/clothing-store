import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import Header from './components/header/header.components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInUp = lazy(() => import('./pages/sign-in-up/sign-in-up.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => { checkUserSession() },
    [checkUserSession]
  );

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />

            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin"
              render={() => currentUser ?
                (<Redirect to="/"></Redirect>)
                : (<SignInUp></SignInUp>)} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div >
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
