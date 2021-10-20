import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("/serviceFakeData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-secondary my-3">Services For You From Unicorn Healthcare</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;