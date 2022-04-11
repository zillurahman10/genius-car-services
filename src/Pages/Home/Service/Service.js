import React from 'react';

const Service = ({ service }) => {
    const { name, price, img, description } = service
    return (
        <div style={{ margin: '20px', border: "2px solid gray", borderRadius: '10px' }}>
            <img style={{ marginLeft: '20px', marginTop: '20px', borderRadius: '10px' }} src={img} alt="" />
            <div style={{ marginLeft: '10px', textAlign: "center" }}>
                <h2>{name}</h2>
                <p>Price : {price}</p>
                <p><small>{description}</small></p>
                <button style={{ marginBottom: '30px' }} className='btn btn-primary'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;