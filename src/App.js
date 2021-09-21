import React, { Fragment, useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import './App.css';
import Navbar from './components/Navbar';
import News from './news/News';

function App() {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
  return (
    <Fragment>
      <Navbar />
      <LoadingBar height={3} color="blue" progress={progress} />
      <Switch>

        <Route exact path='/'>
          <News pageSize={pageSize} apiKey={apiKey} key="general" setProgress={setProgress} category="general" />
        </Route>
        <Route exact path='/business'>
          <News pageSize={pageSize} apiKey={apiKey} key="business" setProgress={setProgress} category="business" />
        </Route>
        <Route exact path='/entertainment'>
          <News pageSize={pageSize} apiKey={apiKey} key="entertainment" setProgress={setProgress} category="entertainment" />
        </Route>
        <Route exact path='/health'>
          <News pageSize={pageSize} apiKey={apiKey} key="health" setProgress={setProgress} category="health" />
        </Route>
        <Route exact path='/science'>
          <News pageSize={pageSize} apiKey={apiKey} key="science" setProgress={setProgress} category="science" />
        </Route>
        <Route exact path='/sports'>
          <News pageSize={pageSize} apiKey={apiKey} key="sports" setProgress={setProgress} category="sports" />
        </Route>
        <Route exact path='/technology'>
          <News pageSize={pageSize} apiKey={apiKey} key="technology" setProgress={setProgress} category="technology" />
        </Route>

      </Switch>
    </Fragment>
  );
}

export default App;
