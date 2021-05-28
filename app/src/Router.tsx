import React, { useLayoutEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect, useRouteMatch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

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
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div style={{
      backgroundColor: 'white',
    }}>
      <Header />
      <div style={{
        minHeight: window.innerHeight,
        justifyContent: 'center',
        display: 'flex',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '900px',
          justifyContent: 'center',
          display: 'flex',
          flexGrow: 1
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
