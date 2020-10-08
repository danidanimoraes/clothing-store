import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
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

    }
    componentWillUnmount() { }

    render() {
        const { match, isFetching, isLoaded } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) =>
                        <CollectionsOverviewWithSpinner isLoading={!isLoaded} {...props}></CollectionsOverviewWithSpinner>} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) =>
                        <CollectionPageWithSpinner isLoading={!isLoaded} {...props}></CollectionPageWithSpinner>} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectCollectionsIsFetching,
    isLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    // return {
    //     updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    // }
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
