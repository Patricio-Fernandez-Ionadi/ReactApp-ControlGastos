import React from "react"
// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// COMPONENTS
import ResultadosBusqueda from "./Pages/Busquedas/ResultadosBusqueda"
import DetalleBusqueda from "./Pages/Busquedas/DetalleBusqueda"
// STYLES
import { createGlobalStyle } from "styled-components"
// PAGES
import Landing from "./Pages/Homes/Landing"
// sucursales
import HomeSuc from "./Pages/Homes/HomeSuc"
import FacturasSuc from "./Pages/Facturas/FacturasSuc"
import ProveedoresSuc from "./Pages/Proveedores/ProveedoresSuc"
import GastosSuc from "./Pages/Gastos/GastosSuc"
import PromediosSuc from "./Pages/Promedios/PromediosSuc"
import SucursalesSuc from "./Pages/Sucursales/SucursalesSuc"
import RubrosSuc from "./Pages/Rubros/RubrosSuc"

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
				<Switch>
					<Route exact path='/' component={Landing} />
					{/* SUCURSALES */}
					<Route exact path='/sucursales' component={HomeSuc} />
					<Route exact path='/sucursales/facturas' component={FacturasSuc} />
					<Route
						exact
						path='/sucursales/proveedores'
						component={ProveedoresSuc}
					/>
					<Route exact path='/sucursales/gastos' component={GastosSuc} />
					<Route exact path='/sucursales/promedios' component={PromediosSuc} />
					<Route
						exact
						path='/sucursales/sucursales'
						component={SucursalesSuc}
					/>
					<Route exact path='/sucursales/rubros' component={RubrosSuc} />
					{/* Derivados 1 */}
					<Route
						exact
						path='/sucursales/search/:keyword'
						component={ResultadosBusqueda}
					/>
					{/* Derivados 2 */}
					<Route
						exact
						path='/sucursales/search/:keyword/:id'
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

////////////////////////////////////////////////////////////////////////
/////////////////////////////// Colors /////////////////////////////////
////////////////////////////////////////////////////////////////////////

// #ffcd01
// #db281b
