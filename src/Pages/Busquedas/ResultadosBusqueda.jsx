import React from "react"
// hook
import useSearchFilter from "../../hooks/useSearchFilter"
// component
import SearchResultCard from "../../components/SearchResultsCards/SearchResultCard"
import AcordeonBusquedas from "./AcordeonBusquedas"
import Loading from "../../components/Loading/Loading"
// Styles
import { Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "100vw",
	},
	page: {
		minHeight: "calc(100vh - 64px)",
		backgroundImage: "url('/assets/images/archive.jpg')",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
	},
	title: {
		marginTop: 0,
		paddingTop: "8px",
		textAlign: "center",
		color: "#FFCD01",
		textShadow: "0 0 4px #DB281B",
	},
	renderedComponent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	grid: {
		maxWidth: "calc(100vw - 2em)",
		margin: "auto",
	},
}))

export default function ResultadosBusqueda({ match }) {
	const classes = useStyles()
	let { keyword } = match.params
	keyword = decodeURI(keyword)
	const matches = useSearchFilter({ keyword })

	let facturas = matches[0]
	let proveedores = matches[1]
	let sucursales = matches[2]

	let SucComponent
	if (sucursales !== undefined && sucursales[0]) {
		let component
		component = (
			<>
				<Grid
					className={classes.grid}
					container
					direction='row'
					justify='center'
					alignItems='flex-start'
					spacing={2}
				>
					{sucursales.map((each) => {
						const neto = each[" neto "]
						const { id } = each
						return (
							<SearchResultCard
								id={id}
								key={id}
								keyword={keyword}
								sucursal={each.Sucursal}
								proveedor={each.proveedor}
								factura={each.factura}
								costo={neto}
								computa={each.computa}
								detalle={each.detalle}
								dia={each.dia}
								mes={each.mes}
								rubro={each.rubro}
							/>
						)
					})}
				</Grid>
			</>
		)
		SucComponent = component
	}

	let FacComponent
	if (facturas !== undefined && facturas[0]) {
		let component
		component = (
			<>
				<Grid
					className={classes.grid}
					container
					direction='row'
					justify='center'
					alignItems='flex-start'
					spacing={2}
				>
					{facturas.map((each) => {
						const neto = each[" neto "]
						const { id } = each
						return (
							<SearchResultCard
								id={id}
								key={id}
								keyword={keyword}
								sucursal={each.Sucursal}
								proveedor={each.proveedor}
								factura={each.factura}
								costo={neto}
								computa={each.computa}
								detalle={each.detalle}
								dia={each.dia}
								mes={each.mes}
								rubro={each.rubro}
							/>
						)
					})}
				</Grid>
			</>
		)
		FacComponent = component
	}

	let ProvComponent
	if (proveedores !== undefined && proveedores[0]) {
		let component
		component = (
			<div className={classes.renderedComponent}>
				<Grid
					className={classes.grid}
					container
					direction='row'
					justify='center'
					alignItems='flex-start'
					spacing={2}
				>
					{proveedores.map((each) => {
						const neto = each[" neto "]
						const { id } = each
						return (
							<SearchResultCard
								id={id}
								key={id}
								keyword={keyword}
								sucursal={each.Sucursal}
								proveedor={each.proveedor}
								factura={each.factura}
								costo={neto}
								computa={each.computa}
								detalle={each.detalle}
								dia={each.dia}
								mes={each.mes}
								rubro={each.rubro}
							/>
						)
					})}
				</Grid>
			</div>
		)
		ProvComponent = component
	}

	// los 3

	if (!!SucComponent && !!FacComponent & !!ProvComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas
						proveedores={ProvComponent}
						sucursales={SucComponent}
						facturas={FacComponent}
					/>
				</div>
			</div>
		)
		// proveedores y sucursales
	} else if (!!ProvComponent && !!SucComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas
						proveedores={ProvComponent}
						sucursales={SucComponent}
					/>
				</div>
			</div>
		)
		// proveedores y facturas
	} else if (!!FacComponent && !!ProvComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas
						proveedores={ProvComponent}
						facturas={FacComponent}
					/>
				</div>
			</div>
		)
		// facturas y sucursales
	} else if (!!FacComponent && !!SucComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas
						sucursales={SucComponent}
						facturas={FacComponent}
					/>
				</div>
			</div>
		)
		// sucursales y proveedores
	} else if (!!FacComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas facturas={FacComponent} />
				</div>
			</div>
		)
		// proveedores
	} else if (!!ProvComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas proveedores={ProvComponent} />
				</div>
			</div>
		)
		// sucursales
	} else if (!!SucComponent) {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<AcordeonBusquedas sucursales={SucComponent} />
				</div>
			</div>
		)
		// default
	} else {
		return (
			<div className={classes.page}>
				<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
				<div className={classes.root}>
					<Loading />
				</div>
			</div>
		)
	}
}
