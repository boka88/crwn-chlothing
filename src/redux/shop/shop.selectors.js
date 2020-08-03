import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// selektor koji pretvara objekat u array, jer smo json u shop.data.js pretvorili u objekat
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => 
 createSelector(
     [selectCollections],
     collections => (collections ? collections[collectionUrlParam] : null)
 )