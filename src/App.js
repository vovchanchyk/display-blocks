/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Provider from './components/Privider/Provider';
import { Block } from './pages/Block';
import { Blocks } from './pages/Blocks';

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/blocks' />
            </Route>
            <Route exact path='/blocks'>
              <Blocks />
            </Route>
            <Route exact path='/blocks/:blockId'>
              <Block />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
