import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/pages/LandingPage'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/profile' component={Profile} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
          </Switch>
          <Contact />
        </div>
      </HashRouter>
    );
  }
}

export default App;
