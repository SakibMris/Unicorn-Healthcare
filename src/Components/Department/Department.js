import React from 'react';

const Department = (props) => {
    const { name, image, description } = props.department;
    return (
        <div class="col">
            <div class="card h-100">
                <img height='250px' src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Department;