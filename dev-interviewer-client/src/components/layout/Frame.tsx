import React from 'react';
import { Container, Grid } from '@material-ui/core';

interface FrameProps {
    children: React.ReactNode;
}

const Frame = (props: FrameProps) => {
  const { children } = props;

  return (
    <Container maxWidth="md" component="div">
      <Grid container spacing={5} alignItems="flex-end">
        {children}
      </Grid>
    </Container>
  );
};

export default Frame;
