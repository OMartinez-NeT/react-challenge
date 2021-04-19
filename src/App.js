import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Home from './pages/Home/Home'
import {Container} from "@material-ui/core";
import {BrowserRouter, Route } from "react-router-dom";
import Listing from "./pages/Listing/Listing";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
      <>
          <Container>
              <Header/>
              <div style={{marginTop: '8rem'}}>
                  <BrowserRouter>
                      <>
                          <Route path="/" exact component={Home}/>
                          <Route path="/listing" component={Listing}/>
                          <Route path="/detail" component={Detail}/>
                      </>
                  </BrowserRouter>
              </div>
          </Container>
          <Footer/>
      </>
  );
}

export default App;
