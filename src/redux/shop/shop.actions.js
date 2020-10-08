import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

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

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        // Async
        collectionRef.get()
            .then((snapshot) => {
                // QuerySnapshot
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

                // this.props.updateCollections(collectionsMap);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
    }
}

