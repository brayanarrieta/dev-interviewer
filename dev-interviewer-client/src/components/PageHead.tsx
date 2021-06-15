import React from 'react';
import { Grid } from '@material-ui/core';
import PageDescriptor from './PageDescriptor';
import Frame from './layout/Frame';
import TagSelectorContainer from '../containers/TagSelectorContainer';

const PageHead = () => (
  <>
    <PageDescriptor />
    <Frame>
      <Grid item xs={12}>
        <TagSelectorContainer />
      </Grid>
    </Frame>
  </>
);

export default PageHead;
