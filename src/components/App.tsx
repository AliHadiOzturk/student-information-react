import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import StudentModule from './student/StudentModule';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">

        {
          <Switch>
            <Route exact path="/" >
              <div className="header-text">
                Welcome stranger,you're viewing Student Information System made with React/Typescript to learn react ^_^
              </div>
            </Route>
            <Route exact path="/students" component={StudentModule} />
            <Route exact path="/lesson" />
          </Switch >
        }
      </div>
    </div>
  );
}

export default App;
