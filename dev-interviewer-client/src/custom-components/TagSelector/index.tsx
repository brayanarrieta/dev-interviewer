import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { connect, RootStateOrAny } from 'react-redux';

import { useTranslation } from 'react-i18next';
import LoaderBar from '../../components/LoaderBar';
import TagList from './TagList';
import { ClientError, Tag } from '../../types';
import { loadTags, setSelectedTag } from '../../redux/actions';

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

interface TagSelectorProps {
  loadTags: ()=> {};
  setSelectedTag: any;
  isLoadingTags: boolean;
  tags: Tag[];
  error: ClientError;
  selectedTagSlug: string;
}

const TagSelector = (props: TagSelectorProps) => {
  const {
    isLoadingTags, tags, error, selectedTagSlug,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    props.loadTags();
  }, []);

  const render = () => {
    if (isLoadingTags) {
      return <LoaderBar />;
    }

    if (error) {
      return t(error.token);
    }

    return (
      <TagList
        tags={tags}
        selectedTagSlug={selectedTagSlug}
        onSelectedTag={props.setSelectedTag}
      />
    );
  };

  return (
    <Box className={classes.root}>
      {render()}
    </Box>
  );
};

export default connect(
  (state: RootStateOrAny) => ({
    tags: state.tagsStore.tags,
    isLoadingTags: state.tagsStore.isLoadingTags,
    error: state.tagsStore.error,
    selectedTagSlug: state.tagsStore.selectedTagSlug,
  }),
  {
    loadTags,
    setSelectedTag,
  },
)(TagSelector);
