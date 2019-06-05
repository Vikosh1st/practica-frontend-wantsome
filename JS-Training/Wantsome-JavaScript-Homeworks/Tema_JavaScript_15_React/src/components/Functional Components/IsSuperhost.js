import React from 'react';

const IsSuperhost = (props) => (
    <p style={{ display: (props.reviews < 200) ? 'none' : 'block'}}> - Superhost</p>
)

export default IsSuperhost;