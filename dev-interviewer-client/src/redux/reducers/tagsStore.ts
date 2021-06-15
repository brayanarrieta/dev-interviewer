import {
  LOAD_TAGS, LOAD_TAGS_FAIL, LOAD_TAGS_SUCCESS, SET_SELECTED_TAG,
} from '../actions/tagsActions';

const INITIAL_STATE = {
  tags: [],
  selectedTagSlug: null,
};

const tagsStore = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOAD_TAGS:
      return {
        ...state,
        isLoadingTags: true,
        tags: [],
      };
    case LOAD_TAGS_SUCCESS:
      return {
        ...state,
        isLoadingTags: false,
        tags: action.tags,
      };
    case LOAD_TAGS_FAIL:
      return {
        ...state,
        isLoadingTags: false,
        error: action.error,
        tags: [],
      };
    case SET_SELECTED_TAG:
      return {
        ...state,
        selectedTagSlug: action.tagSlug,
      };
    default:
      return state;
  }
};

export default tagsStore;
