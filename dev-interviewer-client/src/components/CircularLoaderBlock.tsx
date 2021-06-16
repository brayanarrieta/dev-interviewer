import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CircularLoader from './CircularLoader';

const useStyles = makeStyles(() => ({
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const CircularLoaderBlock = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loaderContainer}>
      <CircularLoader />
    </Box>
  );
};

export default CircularLoaderBlock;
