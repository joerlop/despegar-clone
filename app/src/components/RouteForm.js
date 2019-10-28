import React from "react";

const RouteForm = (props) => {
    return (
        <div className="form-component">
            <div className="form-input">
                <label htmlFor="from">FROM</label>
                <input 
                    id="from"
                    type="text"  
                    value={props.from}
                    onChange={e => props.setFrom(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="to">TO</label>
                <input 
                    id="to" 
                    type="text"  
                    value={props.to}
                    onChange={e => props.setTo(e.target.value)}
                />
            </div>
        </div>
    )
}

export default RouteForm;