import { Dispatch } from 'redux';
import { makeRequest } from '../../api/makeRequest';
import { GET_TAGS_URL } from '../../api/urls';
import { HTTP_METHODS } from '../../constants/enums';

export const LOAD_TAGS = 'LOAD_TAGS';
export const LOAD_TAGS_SUCCESS = 'LOAD_TAGS_SUCCESS';
export const LOAD_TAGS_FAIL = 'LOAD_TAGS_FAIL';

export const SET_SELECTED_TAG = 'SET_SELECTED_TAG';

export const loadTags = () => async (dispatch: Dispatch) => {
  dispatch({ type: LOAD_TAGS });
  const { data, error } = await makeRequest({
    method: HTTP_METHODS.GET,
    url: GET_TAGS_URL,
  });

  if (error) {
    dispatch({ type: LOAD_TAGS_FAIL, error });
    return;
  }

  const { tags } = data;
  dispatch({ type: LOAD_TAGS_SUCCESS, tags });
};

export const setSelectedTag = (tagSlug: string) => (
  dispatch: Dispatch,
) => dispatch({ type: SET_SELECTED_TAG, tagSlug });
