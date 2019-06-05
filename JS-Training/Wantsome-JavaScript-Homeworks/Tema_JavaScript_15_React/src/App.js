import React from 'react';
import './App.css';
import ApartmentListing from './components/Functional Components/ApartmentListing';

// Folositi cat mai multe componente (de preferat functional daca n-au state) 
// La final faceti un JSON cu detalii pe care sa faceti fetch (hint componentDidMount sau alta metoda din lifecycle)


function App() {
  return (
    <div className="App">
        <ApartmentListing />
    </div>
  );
}

export default App;
