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
import ErrorMessage from '../components/ErrorMessage';
import { getIsDualError, getIsLoading, getQuestionsOrderByVotes } from '../redux/selectors';

interface QuestionsContainerProps {
    selectedTagSlug: string;
    setSelectedTag: any;
    loadQuestionsByTagSlug: any;
    questions: Question[];
    error: ClientError;
    isLoadingQuestions: boolean;
    isLoading: boolean;
    isDualError: boolean;
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
    selectedTagSlug, questions, error, isLoadingQuestions,
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
      return <ErrorMessage message={t(error.token)} />;
    }

    return (
      <QuestionList questions={questions} />
    );
  };

  const render = () => {
    const {
      isDualError,
      isLoading,
    } = props;

    if (isLoading) return <CircularLoaderBlock />;

    if (isDualError) return <ErrorMessage message={t('SOMETHING_WENT_WRONG')} />;

    return (
      <>
        <TagSelectorContainer />
        <Box className={classes.root}>
          {renderQuestionsContent()}
        </Box>
      </>
    );
  };

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
    questions: getQuestionsOrderByVotes(state),
    error: state.questionsStore.error,
    isLoadingQuestions: state.questionsStore.isLoadingQuestions,
    isLoading: getIsLoading(state),
    isDualError: getIsDualError(state),
  }),
  {
    setSelectedTag,
    loadQuestionsByTagSlug,
  },
)(QuestionsContainer);
