import React from 'react';
import { Grid } from '@material-ui/core';
import PageDescriptor from './PageDescriptor';
import Frame from './layout/Frame';
import TagSelector from '../custom-components/TagSelector';

const PageHead = () => (
  <>
    <PageDescriptor />
    <Frame>
      <Grid item xs={12}>
        <TagSelector />
      </Grid>
    </Frame>
  </>
);

export default PageHead;
