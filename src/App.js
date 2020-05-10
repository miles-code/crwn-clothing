import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header-component';

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp-component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  } 
}

export default App;
