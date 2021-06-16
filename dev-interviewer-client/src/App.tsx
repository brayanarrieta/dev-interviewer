import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './custom-components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import PageDescriptor from './custom-components/PageDescriptor';
import QuestionsContainer from './containers/QuestionsContainer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <PageDescriptor />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tag/:slug" component={QuestionsContainer} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
