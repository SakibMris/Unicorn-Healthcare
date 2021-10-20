import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';

const Departments = () => {
    const [depertments, setDepartment] = useState([])
    useEffect(() => {
        fetch('/departmentFakeData.json')
            .then(res => res.json())
            .then(data => setDepartment(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-secondary my-4">Departments Of Unicorn Healthcare</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5 mx-5">
                {
                    depertments.map(department => <Department
                        key={department.id}
                        department={department}></Department>)
                }
            </div>
        </div >
    );
};

export default Departments;