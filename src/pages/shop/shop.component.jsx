import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.component';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';

class ShopPage extends React.Component {
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

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer} />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

})
export default connect(null, mapDispatchToProps)(ShopPage);
