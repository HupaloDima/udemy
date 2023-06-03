import React from 'react';
import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const EmployeesList = ({data}) => {
    const elements = data.map(item => <EmployeesListItem {...item} key={item.id}/>);

    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    );
};

export default EmployeesList;