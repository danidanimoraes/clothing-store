import { SHOP_DATA } from './shopdata.jsx';

const INITIAL_STATE = {
    shopData: SHOP_DATA
}

const shopReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return prevState;
    }
}

export default shopReducer;