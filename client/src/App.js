import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './CoreComponents/NavBar';
import Lists from './CoreComponents/Lists';
import SignIn from './CoreComponents/SignIn';
import SignUp from './CoreComponents/SignUp';
import Homepage from './CoreComponents/Homepage';
import NewList from './CreateNew/NewList';
import Features from './CoreComponents/Features';
import NewTheme from './CreateNew/NewTheme';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    fetch('/api/account')
    .then(r => {
      if (r.ok) {
        r.json().then(data => setUser(data))
      } else {
        r.json().then(e => console.log(e))
      }
    })

  }, [])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Homepage user={user}/>}></Route>
          <Route exact path='/lists' element={<Lists user={user} />}></Route>
          <Route exact path='/signin' element={<SignIn/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/new-list' element={<NewList user={user}/>}></Route>
          <Route exact path='/features' element={<Features/>}></Route>
          <Route exact path='/new-theme' element={<NewTheme/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
