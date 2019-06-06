import React from 'react';

const ImagePreview = (props) => (
    <img src={props.imgUrl} alt="Apartment for Rent" style={{width:250,height:130}}></img>
)

export default ImagePreview;