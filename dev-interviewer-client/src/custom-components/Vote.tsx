import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import ErrorMessage from '../components/ErrorMessage';
import { ClientError } from '../types';
import { VOTE_TYPE } from '../constants/enums';

const useStyles = makeStyles((theme) => ({
  voteUpButtonMargin: {
    marginLeft: theme.spacing(1),
  },
  iconMargin: {
    marginLeft: theme.spacing(1),
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
      <IconButton
        aria-label="vote-up"
        color="primary"
        disabled={isProcessing}
        onClick={() => handleOnVoteEvent(VOTE_TYPE.UP)}
        className={classes.voteUpButtonMargin}
      >
        {votesUp}
        <ThumbUpAltIcon className={classes.iconMargin} />
      </IconButton>

      <IconButton
        aria-label="vote-down"
        color="secondary"
        disabled={isProcessing}
        onClick={() => handleOnVoteEvent(VOTE_TYPE.DOWN)}
      >
        {votesDown}
        <ThumbDownIcon className={classes.iconMargin} />
      </IconButton>
    </>
  );
};

export default Vote;
