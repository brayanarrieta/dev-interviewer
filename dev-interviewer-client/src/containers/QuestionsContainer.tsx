import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Frame from '../components/layout/Frame';
import LoaderBar from '../components/LoaderBar';
import QuestionList from '../custom-components/QuestionList';
import { setSelectedTag, loadQuestionsByTagSlug } from '../redux/actions';
import { ClientError, Question } from '../types';
import TagSelectorContainer from './TagSelectorContainer';
import CircularLoaderBlock from '../components/CircularLoaderBlock';

interface QuestionsContainerProps {
    selectedTagSlug: string;
    setSelectedTag: any;
    loadQuestionsByTagSlug: any;
    questions: Question[];
    error: ClientError;
    isLoadingQuestions: boolean;
    isLoading: boolean;
}

interface QuestionsContainerParams {
    slug: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(0.5),
  },
}));

const QuestionsContainer = (props: QuestionsContainerProps) => {
  const { slug } = useParams<QuestionsContainerParams>();
  const { t } = useTranslation();

  const {
    selectedTagSlug, questions, error, isLoadingQuestions, isLoading,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (slug && selectedTagSlug !== slug) {
      props.setSelectedTag(slug);
    }
  }, []);

  useEffect(() => {
    if (selectedTagSlug) {
      props.loadQuestionsByTagSlug(selectedTagSlug);
    }
  }, [selectedTagSlug, loadQuestionsByTagSlug]);

  const renderQuestionsContent = () => {
    if (isLoadingQuestions) {
      return <LoaderBar />;
    }

    if (error) {
      return t(error.token);
    }

    return (
      <QuestionList questions={questions} />
    );
  };

  const render = () => (
    isLoading
      ? (<CircularLoaderBlock />)
      : (
        <>
          <TagSelectorContainer />
          <Box className={classes.root}>
            {renderQuestionsContent()}
          </Box>
        </>
      ));

  return (
    <Frame>
      <Grid item xs={12}>
        {render()}
      </Grid>
    </Frame>
  );
};

export default connect(
  (state: RootStateOrAny) => ({
    selectedTagSlug: state.tagsStore.selectedTagSlug,
    questions: state.questionsStore.questions,
    error: state.questionsStore.error,
    isLoadingQuestions: state.questionsStore.isLoadingQuestions,
    // TODO: Integrate selectors pattern
    isLoading: state.questionsStore.isLoadingQuestions && state.tagsStore.isLoadingTags,
  }),
  {
    setSelectedTag,
    loadQuestionsByTagSlug,
  },
)(QuestionsContainer);
