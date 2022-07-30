import Cupcakes from "./cupcakes"

const Home = () => (
    <>
    <div className="main-banner img-container dark-color">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img
                    className="main-banner__img"
                    src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb"
                    alt="imagen de baner" />
                <div className="main-banner__data s-center">
                    <p className="s-mb-0 t2">Segundo Proyecto</p>
                    <p>Una página de ventas de Cupcakes</p><a className="button" href="/cupcakes">Ver Cupcakes</a>
                </div>
            </div>
        </div>
    </div>
    <Cupcakes peticion= "cupcakes?sabor_like=chocolate"/>
    </>
)

export default Home