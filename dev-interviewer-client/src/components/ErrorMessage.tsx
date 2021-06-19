import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});
interface ErrorMessageProps {
    message: string;
}
const ErrorMessage = (props: ErrorMessageProps) => {
  const classes = useStyles();
  const { message } = props;

  return (
    <div className={classes.root}>
      <Typography component="span" variant="subtitle1" align="center" color="error">
        {message}
      </Typography>
    </div>
  );
};

export default ErrorMessage;
