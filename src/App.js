import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/pages/LandingPage'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="main-panel">
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/profile' component={Profile} />
              <Route path='/contact' component={Contact} />
              <Route path='/projects' component={Projects} />
            </Switch>
          </div>
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
