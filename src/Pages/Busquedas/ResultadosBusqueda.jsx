import React from "react"
// hook
import useSearchFilter from "../../hooks/useSearchFilter"
// component
import SearchResultCard from "../../components/SearchResultsCards/SearchResultCard"
import AcordeonBusquedas from "./AcordeonBusquedas"
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

	let newArrTotal = []
	if (sucursales !== undefined) sucursales.map((each) => newArrTotal.push(each))
	if (proveedores !== undefined)
		proveedores.map((each) => newArrTotal.push(each))
	if (facturas !== undefined) facturas.map((each) => newArrTotal.push(each))
	const info = [...new Set(newArrTotal)]

	let CardsToRender
	CardsToRender = (
		<>
			<Grid
				className={classes.grid}
				container
				direction='row'
				justify='center'
				alignItems='flex-start'
				spacing={2}
			>
				{info.map((each) => {
					const neto = each.costo_neto
					const { id } = each
					return (
						<SearchResultCard
							id={id}
							key={id}
							keyword={keyword}
							sucursal={each.sucursal}
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

	return (
		<div className={classes.page}>
			<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
			<div className={classes.root}>
				<AcordeonBusquedas info={CardsToRender} />
			</div>
		</div>
	)
}
