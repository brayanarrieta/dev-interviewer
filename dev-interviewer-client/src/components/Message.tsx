import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});
interface MessageProps {
    message: string;
}
const Message = (props: MessageProps) => {
  const classes = useStyles();
  const { message } = props;

  return (
    <div className={classes.root}>
      <Typography component="span" variant="subtitle1" align="center">
        {message}
      </Typography>
    </div>
  );
};

export default Message;
