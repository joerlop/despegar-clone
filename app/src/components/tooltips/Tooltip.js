import React from 'react'
import "./Tooltip.scss"

class Tooltip extends React.Component{

  state = {
    radio: "Radio 1",
  }

  handleRadio = event => {
    this.setState({ radio: event.target.value });
  }

  render(){
    return(
        <div className="tooltip">
            <div className="tooltip-title">
                <h1>AIRPORTS</h1>
            </div>
            <div className="tooltip-content">
                <p>Barranquilla</p>
            </div>
        </div>
    )
  }
}

export default Tooltip
