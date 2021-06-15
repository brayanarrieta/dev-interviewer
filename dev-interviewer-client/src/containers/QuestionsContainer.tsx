import React, { useEffect } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageHead from '../components/PageHead';
import { setSelectedTag, loadQuestionsByTagSlug } from '../redux/actions';
import { Question } from '../types';

interface QuestionsContainerProps {
    selectedTagSlug: string;
    setSelectedTag: any;
    loadQuestionsByTagSlug: any;
    questions: Question[]
}

interface QuestionsContainerParams {
    slug: string;
}
const QuestionsContainer = (props: QuestionsContainerProps) => {
  const { slug } = useParams<QuestionsContainerParams>();
  // eslint-disable-next-line no-unused-vars
  const { selectedTagSlug, questions } = props;

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

  return (
    <>
      <PageHead />
    </>
  );
};

export default connect(
  (state: RootStateOrAny) => ({
    selectedTagSlug: state.tagsStore.selectedTagSlug,
    questions: state.questionsStore.questions,
  }),
  {
    setSelectedTag,
    loadQuestionsByTagSlug,
  },
)(QuestionsContainer);
