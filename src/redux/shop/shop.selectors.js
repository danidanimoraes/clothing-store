import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    selectShop,
    (shop) => shop.collections
)

// not memoized because it depends on the dynamic argument collectionURLParam
export const selectCollection = memoize((collectionURLParam) => createSelector(
    selectCollections,
    (collections) => { console.log("colls", collections); return collections ? collections[collectionURLParam] : null }
))

export const selectCollectionsArray = createSelector(
    selectCollections,
    (collections) => collections ? Object.values(collections) : []
)