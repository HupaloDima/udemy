import React from 'react';
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

const data = [
    {name: 'Den', salary: 800, id: 1, increase: false},
    {name: 'Ben', salary: 1600, id: 2, increase: true},
    {name: 'John', salary: 3000, id: 3, increase: false},
]
const App = () => {
        return (
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={data}/>
                <EmployeesAddForm/>
            </div>
        );
    }
;

export default App;