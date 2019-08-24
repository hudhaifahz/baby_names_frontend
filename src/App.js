import React from 'react';
import logo from './logo.svg';
import './App.css';
import uuidv1 from 'uuid/v1'
// import * from './services';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {localStorage.getItem('session') ? localStorage.getItem('session'): startList()}
        </p>
      </header>
    </div>
  );
}

function startList() {
  var uuid = uuidv1()
  localStorage.setItem('session', uuid)
  fetch('https://commit-baby-names-backend.herokuapp.com/names')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        return data + uuid;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

export default App;
