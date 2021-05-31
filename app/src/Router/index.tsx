import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import styles from './styles.module.css';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from={`/`} to={'home'} />
        <Route component={AppLayout} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
}

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="topGutter" />
      <div
        className={styles.page}
        style={{
          minHeight: window.innerHeight - 120,
        }}>
        <div className={styles.innerPage}>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Redirect to={'/'} />
          </Switch>
        </div>
      </div>
      <div className="bottomGutter" />
    </div>
  );
}
