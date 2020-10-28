import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './routes/Home';
import Core from './routes/Core';
import Launch from './routes/Launch';
import Capsule from './routes/Capsule';
import AllCores from './routes/Cores/AllCores';
import PastCores from './routes/Cores/PastCores';
import AllLaunch from './routes/Launches/AllLaunch';
import PastLaunch from './routes/Launches/PastLaunch';
import AllCapsules from './routes/Capsules/AllCapsules';
import UpcomingCores from './routes/Cores/UpcomingCores';
import PastCapsules from './routes/Capsules/PastCapsules';
import UpcomingLaunch from './routes/Launches/UpcomingLaunch';
import UpcomingCapsules from './routes/Capsules/UpcomingCapsules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/launches'>
            <Launch />
          </Route>

          <Route path='/launches-all'>
            <AllLaunch />
          </Route>

          <Route path='/launches-past'>
            <PastLaunch />
          </Route>

          <Route path='/launches-upcoming'>
            <UpcomingLaunch />
          </Route>

          <Route path='/cores'>
            <Core />
          </Route>

          <Route path='/cores-all'>
            <AllCores />
          </Route>

          <Route path='/cores-past'>
            <PastCores />
          </Route>

          <Route path='/cores-upcoming'>
            <UpcomingCores />
          </Route>

          <Route path='/capsules'>
            <Capsule />
          </Route>

          <Route path='/capsules-all'>
            <AllCapsules />
          </Route>

          <Route path='/capsules-past'>
            <PastCapsules />
          </Route>

          <Route path='/capsules-upcoming'>
            <UpcomingCapsules />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
