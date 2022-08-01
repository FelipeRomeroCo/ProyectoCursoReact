import Cupcake from "../../cards/Cupcake"
import useFetch from "../../hooks/useFetch"

const Cupcakes = ({peticion, title}) => {
    // Esto se utuliza antes del hook creado useFetch
    // const [cupcakes, setCupcakes] = useState([])

    // useEffect(() => {
    //     get(`${process.env.REACT_APP_URL_API}${peticion}`)
    //         // .then(response => response.json())    //Esta línea la utiliza fetch
    //         .then(({data}) => setCupcakes(data))
    //         .catch(e => console.log(e))
    // }, [peticion])

    const [cupcakes, error] = useFetch (peticion)
    if (error) {
        return <span>Hubo un error</span>
    }
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