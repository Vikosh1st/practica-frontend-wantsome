import React from 'react';

import ImagePreview from "../Functional Components/ImagePreview";
import WhatAndWhere from '../Functional Components/WhatAndWhere';
import ItemTitle from "../Functional Components/ItemTitle";
import Rating from '../Functional Components/Rating';
import Reviews from "../Functional Components/Reviews";
import IsSuperhost from '../Functional Components/IsSuperhost';

function ApartmentListing(props) {
    return (
    <div className="itemForRent">
        <ImagePreview imgUrl={props.imgUrl}/>
        <WhatAndWhere whatToRent={props.whatToRent} city={props.city}/>
        <ItemTitle title={props.title}/>
        <div className="itemRating">
            <Rating />
            <Reviews reviews={props.reviews}/>
            <IsSuperhost reviews={props.reviews}/>
        </div>
    </div>
    )
}
    


export default ApartmentListing;