import React from 'react';
import { Body } from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Provider from './components/Privider/Provider';
import { Blocks } from './pages/Blocks';

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Body>
          <Blocks />
        </Body>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
