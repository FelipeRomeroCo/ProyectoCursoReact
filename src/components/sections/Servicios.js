import { useEffect, useState } from "react"
import { get } from "axios"

const Servicios = ({peticion}) => {
    const [servicios, setServicios] = useState()

    useEffect (() => {
        get (`${process.env.REACT_APP_URL_API}${peticion}`)
            .then(({data}) => setServicios(data))
            .catch(e => console.log(e))
    }, [peticion])

    if (!servicios){
        return <span>No hay servicios</span>
    }
    return (
        <div className="ed-grid">{
            
            servicios.map(s => (
                <div key={s.id}>
                    <h2>{s.nombre}</h2>
                    <p>{s.descripcion}</p>
                </div>

            )
            )}
        </div>
    )
}

export default Servicios