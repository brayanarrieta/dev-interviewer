import { Question } from '../../types';

export const getQuestionsOrderByVotes = (
  state: any,
) => state.questionsStore.questions.sort((a: Question, b: Question) => {
  const aCalculation = a.votesUp - a.votesDown;
  const bCalculation = b.votesUp - b.votesDown;

  if (aCalculation < bCalculation) return 1;
  if (aCalculation > bCalculation) return -1;

  return 0;
});
