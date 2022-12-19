import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { displayUser } from './CoreComponents/userSlice'
import NavBar from './CoreComponents/NavBar';
import Lists from './CoreComponents/Lists';
import SignIn from './CoreComponents/SignIn';
import SignUp from './CoreComponents/SignUp';
import Homepage from './CoreComponents/Homepage';
import NewList from './CreateNew/NewList';
import Features from './CoreComponents/Features';

function App() {

  const dispatch = useDispatch();
  const viewMode = useSelector(state => state.view.viewMode)

  useEffect(() => {

    fetch('/api/account')
    .then(r => {
      if (r.ok) {
        r.json().then(data => dispatch(displayUser(data)))
      } else {
        dispatch(displayUser({}))
      }
    })

  }, [])

  return (
    <div id='App' className={viewMode}>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/home' element={<Homepage/>}></Route>
          <Route exact path='/lists' element={<Lists/>}></Route>
          <Route exact path='/signin' element={<SignIn/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/new-list' element={<NewList/>}></Route>
          <Route exact path='/features' element={<Features/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
