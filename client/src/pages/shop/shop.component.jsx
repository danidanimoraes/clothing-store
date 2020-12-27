import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { useEffect } from 'react';
import Spinner from '../../components/spinner/spinner.component';

const CollectionPageContainer = lazy(() => import('../collection/collection.component'));
const CollectionsOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    // componentDidMount() {
    // Using redux saga


    // Using reux thunk:
    // this.props.fetchCollectionsStartAsync();



    // Fetching in Shop Page:
    // const collectionRef = firestore.collection('collections');

    // 1 - Using Observables/Observers
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //     // QuerySnapshot
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     this.props.updateCollections(collectionsMap);
    //     this.setState({ isLoading: false })
    // })

    // 2 - Using Promises, but only updates data when shop is remounted (no "onSnapshot" getting all changes)
    // collectionRef.get()
    //     .then((snapshot) => {
    //         // QuerySnapshot
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         this.props.updateCollections(collectionsMap);
    //         this.setState({ isLoading: false })
    //     })

    // 3 - Fetch from Firestore. Project Id: firestore > settings > Project id = clothing-store-cdf5b
    // https://firebase.google.com/docs/firestore/use-rest-api
    // fetch('https://firestore.googleapis.com/v1/projects/clothing-store-cdf5b/databases/(default)/documents/collections')
    // .then((response) =>  response.json)
    // .then((responseJson) => console.log("response", responseJson)) //  extremely nested object

    // }
    throw Error;
    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer} />
            </Suspense>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())

})
export default connect(null, mapDispatchToProps)(ShopPage);
