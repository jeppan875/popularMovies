import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header, { HEADER_HEIGHT } from './components/Header';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      <div style={{ height: HEADER_HEIGHT }} />
      <div
        style={{
          minHeight: window.innerHeight,
          justifyContent: 'center',
          display: 'flex',
        }}>
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            justifyContent: 'center',
            display: 'flex',
            flexGrow: 1,
          }}>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Redirect to={'/'} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}
