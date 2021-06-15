import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Tag } from '../../types';

interface TagListProps {
    tags: Tag[];
    selectedTagId: string;
    onSelectedTag: any;
}

const TagList = (props: TagListProps) => {
  const { tags, selectedTagId, onSelectedTag } = props;

  const handleSelectTag = (tagId: string) => onSelectedTag(tagId);

  const renderTagChip = (tag: Tag) => (
    <Chip
      key={tag.id}
      label={tag.name}
      component="a"
      // href={`/${tag.slug}`}
      clickable
      color="primary"
      onClick={() => handleSelectTag(tag.id)}
      variant={selectedTagId === tag.id ? 'default' : 'outlined'}
    />
  );

  return (
    <>
      {tags.map(renderTagChip)}
    </>
  );
};

export default TagList;
