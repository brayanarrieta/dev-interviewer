import {
  Box, Button, Grid,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import Frame from '../components/layout/Frame';
import LoaderBar from '../components/LoaderBar';
import QuestionList from '../custom-components/QuestionList';
import { setSelectedTag, loadQuestionsByTagSlug, addQuestion } from '../redux/actions';
import { ClientError, Question } from '../types';
import TagSelectorContainer from './TagSelectorContainer';
import CircularLoaderBlock from '../components/CircularLoaderBlock';
import ErrorMessage from '../components/ErrorMessage';
import { getIsDualError, getIsLoading, getQuestionsOrderByVotes } from '../redux/selectors';
import AddQuestionDialog from '../custom-components/AddQuestionDialog';

interface QuestionsContainerProps {
    selectedTagSlug: string;
    setSelectedTag: any;
    loadQuestionsByTagSlug: any;
    questions: Question[];
    error: ClientError;
    isLoadingQuestions: boolean;
    isLoading: boolean;
    isDualError: boolean;
    addQuestion: any;
    isAddingQuestion: boolean;
    addQuestionError: ClientError;
}

interface QuestionsContainerParams {
    slug: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(0.5),
  },
  addQuestionContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  buttonMargin: {
    marginLeft: theme.spacing(1),
  },
}));

const QuestionsContainer = (props: QuestionsContainerProps) => {
  const { slug } = useParams<QuestionsContainerParams>();
  const { t } = useTranslation();
  const [isAddQuestionDialogOpen, setIsAddQuestionDialogOpen] = useState<boolean>(false);

  const {
    selectedTagSlug, questions, error, isLoadingQuestions, addQuestionError,
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

  const handleOpenAddQuestionDialog = () => setIsAddQuestionDialogOpen(true);
  const handleCloseAddQuestionDialog = () => setIsAddQuestionDialogOpen(false);

  const render = () => {
    const {
      isDualError,
      isLoading,
      isAddingQuestion,
    } = props;

    if (isLoading) return <CircularLoaderBlock />;

    if (isDualError) return <ErrorMessage message={t('SOMETHING_WENT_WRONG')} />;

    return (
      <>
        <AddQuestionDialog
          isOpen={isAddQuestionDialogOpen}
          handleClose={handleCloseAddQuestionDialog}
          handleAddQuestion={props.addQuestion}
        />
        <TagSelectorContainer />
        <Box component="div" className={classes.addQuestionContainer}>
          {addQuestionError && <ErrorMessage message={t(addQuestionError.token)} />}
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpenAddQuestionDialog}
            disabled={isAddingQuestion}
            className={classes.buttonMargin}
          >
            {isAddingQuestion ? t('ADDING') : t('ADD_NEW_QUESTION')}
          </Button>
        </Box>
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
    isAddingQuestion: state.questionsStore.isAddingQuestion,
    addQuestionError: state.questionsStore.addQuestionError,
  }),
  {
    setSelectedTag,
    loadQuestionsByTagSlug,
    addQuestion,
  },
)(QuestionsContainer);
