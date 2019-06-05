import React from 'react';

import ImagePreview from "./ImagePreview";
import WhatAndWhere from './WhatAndWhere';
import ItemTitle from "./ItemTitle";
import Rating from './Rating';
import Reviews from "./Reviews";
import IsSuperhost from './IsSuperhost';

function ApartmentListing() {
    return (
        <div>  
            <h2>Homes around the world</h2>
            <div>
                <ImagePreview imgUrl="https://www.phillymag.com/wp-content/uploads/sites/3/2018/09/apartments-for-rent-arch-st-interior.jpg"/>
                <WhatAndWhere whatToRent="ENTIRE APARTMENT" city="MINSK"/>
                <ItemTitle title="Minsk Belarus Studio in historical center"/>
                <div className="itemRating">
                    <Rating />
                    <Reviews reviews="201"/>
                    <IsSuperhost reviews="201"/>
                </div>
            </div>
        </div>
    )
}


export default ApartmentListing;