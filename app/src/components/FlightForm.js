import React, { useState } from "react"
import "./FlightForm.scss"

const FlightForm = (props) => {
    const [origen, setOrigen] = useState("")
    const [destino, setDestino] = useState("")
    const [desde, setDesde] = useState("")
    const [hasta, setHasta] = useState("")
    const [pasajeros, setPasajeros] = useState("")

    return (
        <div className="form-container">
            <div className="form-title">
                <h1>Cheap flights</h1>
            </div>
            <div className="flight-information">
                <form>
                    <label htmlFor="origen">Origen</label>
                    <input 
                        id="origen"
                        type="text" 
                        placeholder="Origen" 
                        value={origen}
                        onChange={e => setOrigen(e.target.value)}
                    />
                    <label htmlFor="destino">Destino</label>
                    <input 
                        id="destino" 
                        type="text" 
                        placeholder="Destino" 
                        value={destino}
                        onChange={e => setDestino(e.target.value)}
                    />
                    <label htmlFor="desde">Fechas</label>
                    <input 
                        id="desde" 
                        type="text" 
                        placeholder="Desde" 
                        value={desde}
                        onChange={e => setDesde(e.target.value)}
                    />
                    <input 
                        id="destino" 
                        type="text" 
                        placeholder="Hasta" 
                        value={hasta}
                        onChange={e => setHasta(e.target.value)}
                    />
                    <label htmlFor="pasajeros">Pasajeros</label>
                    <input 
                        id="pasajeros" 
                        type="text" 
                        placeholder="Pasajeros" 
                        value={pasajeros}
                        onChange={e => setPasajeros(e.target.value)}
                    />
                    <button>Buscar</button>
                </form>
            </div>  
        </div>
    )
}

export default FlightForm;