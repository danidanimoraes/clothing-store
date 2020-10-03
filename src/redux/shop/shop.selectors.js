import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    selectShop,
    (shop) => shop.shopData
)

// not memoized because it depends on the dynamic argument collectionURLParam
export const selectCollection = memoize((collectionURLParam) => createSelector(
    selectCollections,
    (collections) => collections[collectionURLParam]
))

export const selectCollectionsArray = createSelector(
    selectCollections,
    (collections) => Object.values(collections)
)