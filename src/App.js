import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './main';
import Services from './services';
import Contact from './contact';
import About from './about';
import Appointment from './appointment';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Form from './form';
import Pdf from './pdf';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/pdf" component={Pdf} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/main" />
      </Switch>
    </Router>
  );
}

export default App;
