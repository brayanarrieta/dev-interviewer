import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import { Tag } from '../types';

interface TagSelectorProps {
    tags: Tag[];
    selectedTagSlug: string;
    onSelectedTag: any;
}

const TagSelector = (props: TagSelectorProps) => {
  const { tags, selectedTagSlug, onSelectedTag } = props;

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
    />
  );

  return (
    <>
      {tags.map(renderTagChip)}
    </>
  );
};

export default TagSelector;
