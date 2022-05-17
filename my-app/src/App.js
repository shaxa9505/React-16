import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import "./App.css"
import Main from './Layout/Main';

function App(props) {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  );
}

export default App;