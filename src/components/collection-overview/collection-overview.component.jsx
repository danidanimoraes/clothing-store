import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsArray } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {collections.map((collection) =>
                <CollectionPreview key={collection.id} {...collection}></CollectionPreview>
            )}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray
});

export default connect(mapStateToProps)(CollectionOverview);