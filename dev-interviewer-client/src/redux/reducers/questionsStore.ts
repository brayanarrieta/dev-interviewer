import { Question } from '../../types';
import {
  LOAD_QUESTIONS, LOAD_QUESTIONS_FAIL, LOAD_QUESTIONS_SUCCESS,
  VOTE_QUESTION, VOTE_QUESTION_FAIL, VOTE_QUESTION_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const questionsStore = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        isLoadingQuestions: true,
        questions: [],
      };
    case LOAD_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoadingQuestions: false,
        questions: action.questions,
      };
    case LOAD_QUESTIONS_FAIL:
      return {
        ...state,
        isLoadingQuestions: false,
        error: action.error,
        questions: [],
      };

    case VOTE_QUESTION:
      return {
        ...state,
        isProcessingVoteQuestion: true,
      };
    case VOTE_QUESTION_SUCCESS:
    {
      const newQuestionData = action.question;
      const questions: Question[] = state.questions.reduce((
        acc, question: Question,
      ) => {
        if (question.id === newQuestionData.id) {
          // eslint-disable-next-line no-param-reassign
          question = { ...question, ...newQuestionData };
        }
        return acc;
      });

      return {
        ...state,
        isProcessingVoteQuestion: false,
        questions,
      };
    }

    case VOTE_QUESTION_FAIL:
      return {
        ...state,
        isProcessingVoteQuestion: false,
        voteQuestionError: action.voteQuestionError,
      };
    default:
      return state;
  }
};

export default questionsStore;
