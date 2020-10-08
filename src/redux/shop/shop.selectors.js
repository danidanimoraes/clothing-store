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
    (collections) => collections ? collections[collectionURLParam] : null
))

export const selectCollectionsArray = createSelector(
    selectCollections,
    (collections) => collections ? Object.values(collections) : []
)

export const selectCollectionsIsFetching = createSelector(
    selectShop,
    (shop) => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    selectShop,
    (shop) => !!shop.collections
)