import React from 'react';
import './App.scss';

import FlightForm from "./components/FlightForm"

function App() {
  return (
    <div className="app">
      <header>
        <nav className="navigation-bar">
          <h1>despegar</h1>
        </nav>
      </header>
      <section className="content-container">
        <FlightForm />
      </section>
    </div>
  );
}

export default App;
