// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import main from './main';
import Services from './services';
import Contact from './contact';
import About from './about';
import Appointment from './appointment';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={main} />
         <Route exact path="/services" component={Services} />
         <Route exact path="/about" component={About} />
         <Route exact path="/appointment" component={Appointment} />
         <Route exact path="/contact" component={Contact} />
        <Route component={main} /> 
      </Switch>
    </Router>
  );
}

export default App;
