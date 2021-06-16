import { Dispatch } from 'redux';
import { makeRequest } from '../../api/makeRequest';
import { getQuestionsBySlugUrl } from '../../api/urls';
import { HTTP_METHODS } from '../../constants/enums';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAIL = 'LOAD_QUESTIONS_FAIL';

export const loadQuestionsByTagSlug = (slug: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOAD_QUESTIONS });
  const { data, error } = await makeRequest({
    method: HTTP_METHODS.GET,
    url: getQuestionsBySlugUrl(slug),
  });

  if (error) {
    dispatch({ type: LOAD_QUESTIONS_FAIL, error });
    return;
  }

  const { questions } = data;
  dispatch({ type: LOAD_QUESTIONS_SUCCESS, questions });
};
