import React from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { ClientError, Question, VoteType } from '../types';
import { voteQuestionById } from '../redux/actions';
import Vote from '../custom-components/Vote';

interface VoteContainerProps {
  voteQuestionById: any;
  voteQuestionError: { [key: string]: ClientError};
  isProcessingVoteQuestion: boolean;
  question: Question;
}

const VoteContainer = (props: VoteContainerProps) => {
  const {
    voteQuestionError, isProcessingVoteQuestion, question,
  } = props;

  const error = voteQuestionError?.[question.id];

  const handleOnClick = (voteType: VoteType) => props.voteQuestionById(question.id, voteType);

  return (
    <Vote
      error={error}
      handleOnVoteEvent={handleOnClick}
      isProcessing={isProcessingVoteQuestion}
      votesUp={question.votesUp}
      votesDown={question.votesDown}
    />
  );
};

export default connect(
  (state: RootStateOrAny) => ({
    isProcessingVoteQuestion: state.questionsStore.isProcessingVoteQuestion,
    voteQuestionError: state.questionsStore.voteQuestionError,
  }),
  {
    voteQuestionById,
  },
)(VoteContainer);
