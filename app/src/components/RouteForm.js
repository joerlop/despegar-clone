import React from "react";

import Select from "./tooltips/Select"
import TooltipController from "./tooltips/TooltipController"
import Tooltip from "./tooltips/Tooltip"

const RouteForm = (props) => {

    const handleFocus = e => {
        e.preventDefault();
        e.target.select();
    }

    return (
        <div className="form-component">
            <div className="form-input">
                <label htmlFor="from">FROM</label>
                <TooltipController 
                    animation="fadeIn" 
                    duration="350ms" 
                    timing="ease" 
                    properties={["opacity"]}
                >
                    <Select>
                        <input 
                            id="from"
                            type="text"
                            autoComplete="off"  
                            value={props.from}
                            onChange={e => props.setFrom(e.target.value)}
                            onFocus={e => handleFocus(e)}
                        />
                    </Select>
                    <Tooltip setFrom={props.setFrom}/>
                </TooltipController>
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