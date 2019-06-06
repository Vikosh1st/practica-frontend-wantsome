import React from 'react';
import './App.css';
import ApartmentListing from './components/Smart Components/ApartmentListing';
import ListingData from "./ListingData.json"

// Folositi cat mai multe componente (de preferat functional daca n-au state) 
// La final faceti un JSON cu detalii pe care sa faceti fetch (hint componentDidMount sau alta metoda din lifecycle)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ListingData
    }
  }
  
  componenetDidMount() {
    fetch(ListingData)
      .then(response => response.json())
      .then(items => this.setState({data: items}))
  }
  
  render() {
    const listingItem = this.state.data.map(item => 
      <ApartmentListing 
        key={item.id} 
        imgUrl={item.imgUrl}
        whatToRent={item.whatToRent}  
        city={item.city}
        title={item.title}
        reviews={item.reviews}
      />)

    return (
      <div className="App">
        <h3>Homes around the world</h3>
        <div className="Listings">
          {listingItem}
        </div>
      </div>
    );
  }
}

export default App;
