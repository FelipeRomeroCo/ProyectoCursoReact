import { useEffect, useState } from "react"
import {get} from "axios"
import Cupcake from "../../cards/Cupcake"

const Cupcakes = ({peticion, title}) => {

    const [cupcakes, setCupcakes] = useState([])

    useEffect(() => {
        get(`${process.env.REACT_APP_URL_API}${peticion}`)
            // .then(response => response.json())    //Esta línea la utiliza fetch
            .then(({data}) => setCupcakes(data))
            .catch(e => console.log(e))
    }, [peticion])

    return (
        <div className="ed-grid">
            { title && <h1>Página de Cupcakes</h1>}
            {cupcakes ? 
            (
                <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                    {
                        cupcakes.map(({
                            id,
                            imagen,
                            sabor,
                            descripcion,
                            color,
                            precio
                        }) => (<Cupcake 
                            key={id}
                            imagen={imagen}
                            sabor={sabor}
                            descripcion={descripcion}
                            color={color}
                            precio={precio}
                        />))
                    }
                </section>
            ) : (<span>Cargando...</span>)
            }
        </div>
    )
}

export default Cupcakes