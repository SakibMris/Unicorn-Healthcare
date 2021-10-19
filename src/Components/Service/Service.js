import React from 'react';

const Service = (props) => {
    const { name, image, description } = props.service
    return (
        <div>
            <div class="col mx-3">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Name: {name}e</h5>
                        <p class="card-text">{description}</p>
                        <button className="btn btn-info">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;