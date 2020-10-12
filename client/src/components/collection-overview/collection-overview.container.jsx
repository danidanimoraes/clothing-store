import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsIsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsIsFetching //  name expected as props
})

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;