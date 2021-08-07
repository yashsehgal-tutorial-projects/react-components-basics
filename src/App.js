import './styles/index.css';
import React from 'react';
import Header from './components/Header';
import SearchPeople from './components/SearchPeople';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchPeople />
        {/* setting up the routes
          for our web application using */}
        <HashRouter basename="/">
          {/* Route for Home view */}
          <Route path="/"
            exact component={Home}
          />
          {/* Route for Profile view */}
          <Route path="/profile"
            exact component={Profile}
          />
        </HashRouter>
      </div>
    )
  }
}