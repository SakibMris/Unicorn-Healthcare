import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, image, description } = props.service
    return (
        <div>
            <div class="col mx-3">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Name: {name}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`/service/${id}`}><button className="btn btn-info">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;