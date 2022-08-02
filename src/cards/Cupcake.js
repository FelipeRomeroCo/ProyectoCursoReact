import {number, string} from "prop-types"

const Cupcake = ({imagen, sabor, descripcion, color, precio}) => {
    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={imagen} alt={sabor}/>
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <br/>
            <span>Precio: {precio}</span> 
        </div>
    )
}

Cupcake.propTypes = {
    precio: number,
    imagen: string.isRequired,
    sabor: string.isRequired,
    descripcion: string.isRequired,
    color: string
}

Cupcake.defaultProps = {
    imagen: "https://picsum.photos/200/200",
    precio: 0
}

export default Cupcake