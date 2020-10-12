import { ShopActionTypes } from './shop.types';

export const fetchCollectionsStart = (collections) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsSuccess = (collectionsMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
}

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        errorMessage: errorMessage
    }
}
