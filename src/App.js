import React, { Suspense, lazy } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./screen/home/Home'));
const About = lazy(() => import('./screen/about/About'));

function App() {
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" strict component={ Home }/>
            <Route path="/about" strict component={ About }/>
            <Route path="*" strict component={ () => " 404 Page Not Found " } />
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
