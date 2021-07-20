import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Profile from './containers/Profile';
import VerifySms from './containers/VerifySms';

function App() {
  const [progress, setProgress] = useState(0)
  const onProgress = () => {
    setProgress(75)
    setTimeout(() => {
      setProgress(100)
    }, 400);
  }
  return (
    // <Profile/>
    
    <Router>
      <LoadingBar
        height="3px"
        color='#2aaf62'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home onProgress={onProgress} />
          </Route>
          <Route exact path="/dang-nhap">
            <Login onProgress={onProgress} />
          </Route>
          <Route exact path="/gio-hang">
            <Cart onProgress={onProgress} />
          </Route>
          <Route exact path="/dang-ky">
            <Signup onProgress={onProgress}/>
          </Route>
          <Route exact path="/tai-khoan">
            <Profile onProgress={onProgress}/>
          </Route>
          <Route exact path="/quen-mat-khau">
            <VerifySms onProgress={onProgress}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
