import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectSections = createSelector(
    selectMenu,
    (menu) => menu.sections
);