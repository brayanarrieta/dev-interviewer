import React from 'react';
import Chip from '@material-ui/core/Chip';
import { Tag } from '../../types';

interface TagListProps {
    tags: Tag[];
    selectedTagSlug: string;
    onSelectedTag: any;
}

const TagList = (props: TagListProps) => {
  const { tags, selectedTagSlug, onSelectedTag } = props;

  const handleSelectTag = (tagId: string) => onSelectedTag(tagId);

  const renderTagChip = (tag: Tag) => (
    <Chip
      key={tag.id}
      label={tag.name}
      component="a"
      href={`/tag/${tag.slug}`}
      clickable
      color="primary"
      onClick={() => handleSelectTag(tag.slug)}
      variant={selectedTagSlug === tag.slug ? 'default' : 'outlined'}
    />
  );

  return (
    <>
      {tags.map(renderTagChip)}
    </>
  );
};

export default TagList;
