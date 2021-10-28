import React from 'react';
import { Body } from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { Blocks } from './pages/Blocks';

function App() {
  return (
    <>
      <Header />
      <Body>
        <Blocks />
      </Body>
      <Footer />
    </>
  );
}

export default App;
