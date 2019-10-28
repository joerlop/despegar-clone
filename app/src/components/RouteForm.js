import React from "react";

import Select from "./tooltips/Select"
import TooltipController from "./tooltips/TooltipController"
import Tooltip from "./tooltips/Tooltip"

const RouteForm = (props) => {
    return (
        <div className="form-component">
            <div className="form-input">
                <label htmlFor="from">FROM</label>
                <TooltipController>
                    <Select>
                        <input 
                            id="from"
                            type="text"  
                            value={props.from}
                            onChange={e => props.setFrom(e.target.value)}
                        />
                    </Select>
                    <Tooltip />
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