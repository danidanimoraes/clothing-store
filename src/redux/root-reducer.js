
import { combineReducers } from 'redux';
import CartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import menuReducer from './menu/menu.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'menu', 'shop']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    menu: menuReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)