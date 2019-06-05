import React from 'react';
import ImagePreview from "../Functional Components/imagePreview";
import ItemForRent from "../Functional Components/itemForRent";

class ApartmentsListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ["Rome","Minsk"]
        };
    }

    render() {
         
        return (
        <div>  
            <h2>Homes around the world</h2>
            <div>
                <ImagePreview />
                <ItemForRent />

            </div>
        </div>
      )
    }
}

export default ApartmentsListing;