import React, { useState } from "react"


 //The context is imported and used by individual components that need data
export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployee = Employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Employee)
        })
            .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, addEmployee, getEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
