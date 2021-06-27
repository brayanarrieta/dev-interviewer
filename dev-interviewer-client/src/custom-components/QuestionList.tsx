import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import { Box } from '@material-ui/core';
import { Question } from '../types';
import Message from '../components/Message';
import VoteContainer from '../containers/VoteContainer';

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
  accordionDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  accordionDetailsVoteContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
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

    const questionNumber = index + 1;

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
          <Typography style={{ wordWrap: 'break-word' }} className={classes.heading}>
            {`${questionNumber}. ${question}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.detailsPanel }}>
          <Box component="div" className={classes.accordionDetailsContainer}>
            <Typography style={{ wordWrap: 'break-word' }} align="justify">
              {answer}
            </Typography>

            <Box component="div" className={classes.accordionDetailsVoteContainer}>
              <VoteContainer question={item} />
            </Box>
          </Box>

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
