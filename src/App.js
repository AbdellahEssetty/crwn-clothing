import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import Shop from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
