import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        {<Route path="/projects" component={ProjectsPage} />}
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;