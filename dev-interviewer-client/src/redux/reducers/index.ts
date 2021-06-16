import { combineReducers } from 'redux';
import tagsStore from './tagsStore';
import questionsStore from './questionsStore';

export default combineReducers({
  tagsStore,
  questionsStore,
});
