import { Dispatch } from 'redux';
import { makeRequest } from '../../api/makeRequest';
import { getQuestionsBySlugUrl, getVoteQuestionUrl } from '../../api/urls';
import { HTTP_METHODS } from '../../constants/enums';
import { VoteType } from '../../types';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAIL = 'LOAD_QUESTIONS_FAIL';

export const VOTE_QUESTION = 'VOTE_QUESTION';
export const VOTE_QUESTION_SUCCESS = 'VOTE_QUESTION_SUCCESS';
export const VOTE_QUESTION_FAIL = 'VOTE_QUESTION_FAIL';

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

export const voteQuestionById = (
  questionId: string,
  voteType: VoteType,
) => async (dispatch: Dispatch) => {
  dispatch({ type: VOTE_QUESTION });
  const { data, error } = await makeRequest({
    method: HTTP_METHODS.PUT,
    url: getVoteQuestionUrl(questionId),
    data: { voteType },
  });

  if (error) {
    dispatch({ type: VOTE_QUESTION_FAIL, voteQuestionError: { [questionId]: error } });
    return;
  }

  const { question } = data;
  dispatch({ type: VOTE_QUESTION_SUCCESS, question });
};
