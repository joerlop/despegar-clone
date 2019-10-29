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
                <p onClick={() => this.props.setFrom("Barranquilla")}>Barranquilla</p>
                <p onClick={() => this.props.setFrom("Medellin")}>Medellin</p>
                <p>Barranquilla</p>
                <p>Barranquilla</p>
            </div>
        </div>
    )
  }
}

export default Tooltip
