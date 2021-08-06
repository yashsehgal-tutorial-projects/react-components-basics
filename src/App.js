import './styles/index.css';
import React from 'react';
import Header from './components/Header';
import SearchPeople from './components/SearchPeople';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchPeople />
        {/* setting up the routes
          for our web application using */}
        <HashRouter basename="/">
          <Route path="/"
            exact component={Home}
          />
        </HashRouter>
      </div>
    )
  }
}