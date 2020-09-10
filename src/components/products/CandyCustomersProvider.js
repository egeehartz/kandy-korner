import React, {useState} from "react"

export const CandyCustomersContext = React.createContext()

export const CandyCustomersProvider = (props) => {
    const [CandyCustomers, setCandyCustomers] = useState([])

    const getCandyCustomers = () => {
        return fetch("http://localhost:8088/candyCustomers")
            .then(res => res.json())
            .then(setCandyCustomers)
    }

    const addCandyCustomers = CandyCustomers => {
        return fetch("http://localhost:8088/candyCustomers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CandyCustomers)
        })
            .then(getCandyCustomers)
    }

    return (
        <CandyCustomersContext.Provider value={{
            CandyCustomers, addCandyCustomers, getCandyCustomers
        }}>
            {props.children}
        </CandyCustomersContext.Provider>
    )
}