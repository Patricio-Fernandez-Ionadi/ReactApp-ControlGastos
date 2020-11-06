// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// Components
import MainNavigation from "./components/MainNavigation/MainNavigation"
// Pages
import Home from "./Pages/Home/Home"
import Facturas from "./Pages/Facturas/Facturas"
import Proveedores from "./Pages/Proveedores/Proveedores"
import Gastos from "./Pages/Gastos/Gastos"
import Promedios from "./Pages/Promedios/Promedios"
import Sucursales from "./Pages/Sucursales/Sucursales"
import Rubros from "./Pages/Rubros/Rubros"
// busqueda
import ResultadosBusqueda from "./Pages/Busquedas/ResultadosBusqueda"
import DetalleBusqueda from "./Pages/Busquedas/DetalleBusqueda"
// GlobalStyles
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
`
function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<MainNavigation />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/facturas' component={Facturas} />
					<Route path='/proveedores' component={Proveedores} />
					<Route path='/gastos' component={Gastos} />
					<Route path='/promedios' component={Promedios} />
					<Route path='/sucursales' component={Sucursales} />
					<Route path='/rubros' component={Rubros} />
					<Route exact path='/search/:keyword' component={ResultadosBusqueda} />
					<Route
						exact
						path='/search/:keyword/:id'
						component={DetalleBusqueda}
					/>
				</Switch>
			</Router>
		</>
	)
}

export default App

////////////////////////////////////////////////////////////////////////
///////////////////////////// BreakPoints //////////////////////////////
////////////////////////////////////////////////////////////////////////
// xs 600px-
// sm 600px+ 960px-
// md 960px+ 1280px-
// lg 1280px+ 1920px-
// xl 1920px+
