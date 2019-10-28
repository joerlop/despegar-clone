import React, { useState } from "react"
import "./FlightForm.scss"

import RouteForm from "./RouteForm"
import DateForm from "./DateForm"
import PassengersForm from "./PassengersForm"

const FlightForm = (props) => {
    const [to, setTo] = useState("")
    const [from, setFrom] = useState("")
    const [departing, setDeparting] = useState("")
    const [returning, setReturning] = useState("")
    const [passengers, setPassengers] = useState("1")

    const search = e => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
            <div className="flight-form-container">
                <div className="form-title">
                    <h1>Cheap flights</h1>
                </div>
                <form onSubmit={e => search(e)}>
                    <RouteForm 
                        setTo={setTo} 
                        setFrom={setFrom} 
                        to={to} 
                        from={from}
                    />
                    <DateForm 
                        setDeparting={setDeparting} 
                        setReturning={setReturning} 
                        departing={departing} 
                        returning={returning}
                    />
                    <PassengersForm 
                        setPassengers={setPassengers}
                        passengers={passengers}
                    />
                    <button onClick={e => search(e)}>Search</button>
                </form>
            </div>  
        </div>
    )
}

export default FlightForm;