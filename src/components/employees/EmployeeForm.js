import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import {LocationContext} from "../locations/LocationProvider"
import "./Employee.css"

export const EmployeeForm = (props) => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const fulltime = useRef(null)
    const rate = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId,
                manager: manager.current.value,
                fulltime: fulltime.current.value,
                rate: rate.current.value
            })
            .then(() => props.history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager Status: </label>
                    <input defaultValue="" name="manager" ref={manager} id="employeeManager" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="fulltime">Full Time Status: </label>
                    <input defaultValue="" name="fulltime" ref={fulltime} id="employeeFulltime" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="rate">Hourly Rate: </label>
                    <input defaultValue="" name="rate" ref={rate} id="employeeRate" className="form-control" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}
