import React from "react";

const PassengersForm = (props) => {
    return (
        <div className="form-input">
            <label htmlFor="passengers">PASSENGERS</label>
            <input 
                id="passengers" 
                type="text"  
                value={props.passengers}
                onChange={e => props.setPassengers(e.target.value)}
            />
        </div>
    )
}

export default PassengersForm;