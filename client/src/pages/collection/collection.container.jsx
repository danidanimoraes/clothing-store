import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state) //  name expected as props
})

// const CollectionPage = connect(mapStateToProps)(WithSpinner(CollectionPage));

const CollectionPage = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;