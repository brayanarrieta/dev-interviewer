import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { useAxios } from '../../custom-hooks/useAxios';
import { HTTP_METHODS } from '../../constants/enums';
import { GET_TAGS_URL } from '../../api/urls';
import LoaderBar from '../../components/LoaderBar';
import TagList from './TagList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const TagSelector = () => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const { response: tags, error, isLoading } = useAxios({
    method: HTTP_METHODS.GET,
    url: GET_TAGS_URL,
  });

  const [selectedTagId, setSelectedTagId] = useState('');

  const render = () => {
    if (isLoading) {
      return <LoaderBar />;
    }

    return (
      <TagList
        tags={tags || []}
        selectedTagId={selectedTagId}
        onSelectedTag={setSelectedTagId}
      />
    );
  };

  return (
    <Box className={classes.root}>
      {render()}
    </Box>
  );
};

export default TagSelector;
