import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import { Question } from '../types';
import Message from '../components/Message';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expandedPanel: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  expandIcon: {
    color: theme.palette.common.white,
  },
  rootPanel: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  detailsPanel: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

interface QuestionListProps {
    questions: Question[];
}

const QuestionList = (props: QuestionListProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { questions } = props;

  const renderQuestionItem = (item: Question, index: number) => {
    const {
      question, answer, id, tagId,
    } = item;

    const isFirstQuestion = index === 0;

    return (
      <Accordion
        key={`${tagId}-${id}`}
        TransitionProps={{ unmountOnExit: true }}
        classes={{ root: classes.rootPanel }}
        defaultExpanded={isFirstQuestion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          classes={{ expanded: classes.expandedPanel }}
        >
          <Typography className={classes.heading}>
            {`${index + 1}. ${question}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.detailsPanel }}>
          <Typography align="justify">
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div className={classes.root}>
      {questions.length ? questions.map(renderQuestionItem) : <Message message={t('THERE_ARE_NOT_QUESTIONS')} />}
    </div>
  );
};

export default QuestionList;
