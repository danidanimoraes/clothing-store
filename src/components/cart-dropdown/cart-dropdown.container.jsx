import { compose } from 'redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownReduxContainer = withRouter(connect(mapStateToProps)(CartDropdown))
export default CartDropdownReduxContainer;

