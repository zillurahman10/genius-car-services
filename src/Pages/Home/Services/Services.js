import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('sevices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='d-flex justify-content-center mt-1 text-primary'>Our Sevices</h2>
            <div className="service">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;