import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...prevState,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...prevState,
                collections: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...prevState,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return prevState;
    }
}

export default shopReducer;