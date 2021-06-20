import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import ErrorMessage from '../components/ErrorMessage';
import { ClientError } from '../types';
import { VOTE_TYPE } from '../constants/enums';

const useStyles = makeStyles((theme) => ({
  voteUpButtonMargin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface VoteProps {
    error: ClientError | undefined;
    handleOnVoteEvent: any;
    isProcessing: boolean;
    votesUp: number;
    votesDown: number;
}

const Vote = (props: VoteProps) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    error, handleOnVoteEvent, isProcessing, votesUp, votesDown,
  } = props;
  return (
    <>
      {error && <ErrorMessage message={t(error.token)} />}

      <Button
        variant="outlined"
        color="primary"
        endIcon={<ThumbUpAltIcon />}
        aria-label="vote-up"
        disabled={isProcessing}
        onClick={() => handleOnVoteEvent(VOTE_TYPE.UP)}
        className={classes.voteUpButtonMargin}
      >
        {votesUp}
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        endIcon={<ThumbDownIcon />}
        aria-label="vote-down"
        disabled={isProcessing}
        onClick={() => handleOnVoteEvent(VOTE_TYPE.DOWN)}
      >
        {votesDown}
      </Button>
    </>
  );
};

export default Vote;
