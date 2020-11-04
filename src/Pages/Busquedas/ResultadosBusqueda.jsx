import React from "react"
// hook
import useSucursales from "../../hooks/useSucursales"
// component
import SearchResultCard from "../../components/SearchResultsCards/SearchResultCard"
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
	grid: {
		maxWidth: "calc(100vw - 2em)",
		margin: "auto",
	},
}))

export default function ResultadosBusqueda({ match }) {
	let { keyword } = match.params
	keyword = decodeURI(keyword)
	const sucursales = useSucursales({ keyword })
	const classes = useStyles()

	return (
		<div className={classes.page}>
			<h1 className={classes.title}>Resultados de: "{keyword}"</h1>
			<div className={classes.root}>
				{/* prueba */}
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
			</div>
		</div>
	)
}
