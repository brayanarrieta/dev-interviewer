import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tag } from '../types';
import Message from '../components/Message';

interface TagSelectorProps {
    tags: Tag[];
    selectedTagSlug: string;
    onSelectedTag: any;
    disableSelector: boolean;
}

const TagSelector = (props: TagSelectorProps) => {
  const {
    tags, selectedTagSlug, onSelectedTag, disableSelector,
  } = props;

  const { t } = useTranslation();

  const handleSelectTag = (tagId: string) => onSelectedTag(tagId);

  const renderTagChip = (tag: Tag) => (
    <Chip
      key={tag.id}
      label={tag.name}
      to={`/tag/${tag.slug}`}
      clickable
      color="primary"
      onClick={() => handleSelectTag(tag.slug)}
      variant={selectedTagSlug === tag.slug ? 'default' : 'outlined'}
      component={Link}
      disabled={disableSelector}
    />
  );

  return (
    <>
      {tags.length ? tags.map(renderTagChip) : <Message message={t('THERE_ARE_NOT_TAGS')} /> }
    </>
  );
};

export default TagSelector;
