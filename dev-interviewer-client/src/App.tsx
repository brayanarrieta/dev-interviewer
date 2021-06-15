import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import QuestionsContainer from './containers/QuestionsContainer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
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
