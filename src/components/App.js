import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import "../styles/styles.scss"
import AboutUs from "./pages/aboutUS";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

const App = () => (
  <div>
    <Router>
    <Header />
      <Routes>
        <Route path="/cupcakes" element = {<Cupcakes />}/>
        <Route path="/aboutUs" element = {<AboutUs />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
)

export default App;
