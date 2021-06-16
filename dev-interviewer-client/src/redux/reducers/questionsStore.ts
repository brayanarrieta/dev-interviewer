import { LOAD_QUESTIONS, LOAD_QUESTIONS_FAIL, LOAD_QUESTIONS_SUCCESS } from '../actions';

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
    default:
      return state;
  }
};

export default questionsStore;
