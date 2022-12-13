import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import NavBar from './CoreElements/NavBar';
import Lists from './CoreElements/Lists';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);
  const [userErrors, setUserErrors] = useState([]);

  useEffect(() => {

    fetch('/api/account')
    .then(r => {
      if (r.ok) {
        r.json().then(data => setUser(data))
      } else {
        r.json().then(e => setUserErrors(e.errors))
      }
    })

  }, [])

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path='/lists' element={<Lists user={user} userErrors={userErrors}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
