import React from 'react';
import {
  Container, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const PageDescriptor = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="div" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Dev Interviewer
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Description
      </Typography>
    </Container>
  );
};

export default PageDescriptor;
