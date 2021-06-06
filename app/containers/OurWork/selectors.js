import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWork = state => {
  return state.ourWork || initialState
};

const makeSelectWorks = () =>
  createSelector(
    selectWork,
    workState => workState.works,
  );

const makeSelectWorksLayout = () =>
  createSelector(
    selectWork,
    workState => workState.layout,
  );

const makeSelectTouchedWork = () =>
  createSelector(
    selectWork,
    workState => workState.touchedWork,
  );

export {
  selectWork,
  makeSelectWorks,
  makeSelectWorksLayout,
  makeSelectTouchedWork,
};
