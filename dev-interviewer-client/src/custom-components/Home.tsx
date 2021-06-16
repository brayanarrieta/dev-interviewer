import { Grid } from '@material-ui/core';
import React from 'react';
import TagSelectorContainer from '../containers/TagSelectorContainer';
import Frame from '../components/layout/Frame';

const Home = () => (

  <Frame>
    <Grid item xs={12}>
      <TagSelectorContainer />
    </Grid>
  </Frame>

);

export default Home;
