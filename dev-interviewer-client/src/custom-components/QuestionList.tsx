import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Question } from '../types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expandedPanel: {
    backgroundColor: theme.palette.primary.main,
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
  const { questions } = props;

  const renderQuestionItem = (item: Question) => {
    const {
      question, answer, id, tagId,
    } = item;

    return (
      <Accordion
        key={`${tagId}-${id}`}
        TransitionProps={{ unmountOnExit: true }}
        classes={{ root: classes.rootPanel }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          classes={{ expanded: classes.expandedPanel }}
        >
          <Typography className={classes.heading}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.detailsPanel }}>
          <Typography>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div className={classes.root}>
      {questions.length ? questions.map(renderQuestionItem) : 'Is Empty' }
    </div>
  );
};

export default QuestionList;
