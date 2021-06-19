import React from 'react';
import {
  Container, Typography, useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { APPLICATION_NAME } from '../config';

const useStyles = makeStyles((theme) => ({
  heroContent: {

    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',

    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(3),
    },
  },
}));

const PageDescriptor = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallMediaQuery = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container maxWidth="sm" component="div" className={classes.heroContent}>
      <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
        {APPLICATION_NAME}
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        {isSmallMediaQuery
          ? t('small application description', { applicationName: APPLICATION_NAME })
          : t('application description', { applicationName: APPLICATION_NAME }) }
      </Typography>
    </Container>
  );
};

export default PageDescriptor;
