import React from 'react'
import uuidv1 from 'uuid/v1'
import validate from 'uuid-validate'
import logo from './logo.svg'
import './App.css'
import NameForm from './components/nameForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Commit Baby Names</h1>
        <p>List: {startSession()}</p>
        <NameForm></NameForm>
      </header>
    </div>
  )
}

function startSession() {
  var listid = document.URL.split('/')[3]
  if (validate((listid))) {
    localStorage.setItem('session', listid)
    return listid
  } else {
    var sessionid = uuidv1()
    localStorage.getItem('session') ? sessionid = localStorage.getItem('session') : localStorage.setItem('session', sessionid)
    return sessionid
  }
}

export default App
