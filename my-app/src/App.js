import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogItem from './components/Dogtem';
import Header from './components/Header';
import Home2 from './containers/Home2';
import Layout from './containers/Layout';
import Account from './pages/Account';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Account' element={<Account />} />
              <Route exact path='/DogItem' element={<DogItem />} />
              <Route exact path='/Home' element={<Home2 />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
