import React from 'react';
import {
  Container, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { APPLICATION_NAME } from '../../config';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const PageDescriptor = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" component="div" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {APPLICATION_NAME}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        {t('application description')}
      </Typography>
    </Container>
  );
};

export default PageDescriptor;
