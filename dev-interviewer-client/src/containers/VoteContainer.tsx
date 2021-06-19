import React from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { ClientError, VoteType } from '../types';
import { voteQuestionById } from '../redux/actions';
import Vote from '../custom-components/Vote';

interface VoteContainerProps {
  voteQuestionById: any;
  voteQuestionError: { [key: string]: ClientError};
  isProcessingVoteQuestion: boolean;
  questionId: string;
}

const VoteContainer = (props: VoteContainerProps) => {
  const {
    voteQuestionError, isProcessingVoteQuestion, questionId,
  } = props;

  const error = voteQuestionError?.[questionId];

  const handleOnClick = (voteType: VoteType) => props.voteQuestionById(questionId, voteType);

  return (
    <Vote
      error={error}
      handleOnVoteEvent={handleOnClick}
      isProcessing={isProcessingVoteQuestion}
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
