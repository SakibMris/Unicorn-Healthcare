import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowServiceDetail = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`/serviceFakeData.json`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])
    const getSingleDetail = details.find(detail => detail.id == id);
    console.log(getSingleDetail);
    return (
        <div>
            <h1>Single Service Details Id: {id} </h1>
        </div>
    );
};

export default ShowServiceDetail;