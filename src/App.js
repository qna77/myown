import './App.css';
import React from "react";
import Tick from './Tick';
import Button from './Button';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Adrian',
  lastName: '',
};

const element = (
    <h1>
      Witaj, {formatName(user)}!
    </h1>
);



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Tick />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {element}

        </a>
          <Button />

      </header>
    </div>
  );
}

export default App;
