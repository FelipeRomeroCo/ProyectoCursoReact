import useFetch from "../../hooks/useFetch"

const Servicios = ({peticion}) => {
    // Esto se utilizaba antes de crear el hook useFetch
    // const [servicios, setServicios] = useState()

    // useEffect (() => {
    //     get (`${process.env.REACT_APP_URL_API}${peticion}`)
    //         .then(({data}) => setServicios(data))
    //         .catch(e => console.log(e))
    // }, [peticion])

    const [servicios, error] = useFetch (peticion)

    if (!servicios){
        return <span>No hay servicios</span>
    }
    if (error) {
        return <span>Hubo un error</span>
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