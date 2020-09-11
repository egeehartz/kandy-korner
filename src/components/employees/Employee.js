import React, { useContext } from "react"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export const Employee = ({ employee }) => {
    const {fireEmployee} = useContext(EmployeeContext)
   return ( <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Works at {employee.locationId}</div>
        <div className="employee__location">Manager? {String(employee.managerBool)}</div>
        <div className="employee__location">Full-Time Status: {String(employee.fulltimeBool)}</div>
        <div className="employee__location">Hourly Rate: {employee.rate}</div>
        <button
            onClick={event => {
                fireEmployee(employee.id)
            }}>
            Fire!😈</button>
        
    </section> 
    )
}
