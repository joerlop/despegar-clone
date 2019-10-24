import React from "react";

const DateForm = (props) => {
    return (
        <div className="form-component">
            <div className="form-input">
                <label htmlFor="departing">DEPARTING</label>
                <input 
                    id="departing" 
                    type="text" 
                    value={props.departing}
                    onChange={e => props.setDeparting(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="returning">RETURNING</label>
                <input 
                    id="returning" 
                    type="text"  
                    value={props.returning}
                    onChange={e => props.setReturning(e.target.value)}
                />
            </div>
        </div>
    )
}

export default DateForm;