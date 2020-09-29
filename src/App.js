import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NaviBar from './components/NaviBar';
import Banner from './components/Banner';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage';

function App() {
  return (
    <Router>
      <NaviBar />
      <Banner />
      <Switch>
        <Route exact path={"/"}>
          <SearchPage />
        </Route>
        <Route exact path={"/work"}>
          <SavedPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
