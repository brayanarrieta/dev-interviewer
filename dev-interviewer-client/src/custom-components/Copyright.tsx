import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { APPLICATION_NAME } from '../config';

const Copyright = () => {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t('copyright', { year: new Date().getFullYear(), applicationName: APPLICATION_NAME })}
    </Typography>
  );
};

export default Copyright;
