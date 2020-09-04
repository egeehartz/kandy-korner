import React from "react"
import "./Employee.css"

export const Employee = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Works at {employee.locationId}</div>
        <div className="employee__location">Manager? {employee.manager}</div>
        <div className="employee__location">Full-Time Status: {employee.fullTime}</div>
        <div className="employee__location">Hourly Rate: {employee.rate}</div>
        
    </section>
)