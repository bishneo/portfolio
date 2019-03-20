import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/pages/LandingPage'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
              <Route path='/projects' component={Projects} />
            </Switch>
          </header>
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
