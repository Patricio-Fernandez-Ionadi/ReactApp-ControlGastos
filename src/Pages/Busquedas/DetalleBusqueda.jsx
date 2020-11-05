import React from "react"
// router
import { Link } from "react-router-dom"
// hooks
import useFacturas from "../../hooks/useFacturas"
// styles
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	page: {
		backgroundImage: "url('/assets/images/desk.jpg')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		padding: "2em 0",
	},
	goBackButton: {
		textDecoration: "none",
		color: "#1a1c20",
		backgroundColor: "#FFCD01",
		display: "inline-block",
		minWidth: "150px",
		height: 30,
		lineHeight: "30px",
		textAlign: "center",
		border: "2px solid #1a1c20",
		borderRadius: "3px",
		transition: "all ease .3s",
		position: "relative",
		left: "50%",
		transform: "translateX(-50%)",
		marginBottom: "1.5em",
		"&:hover": {
			color: "#FFCD01",
			backgroundColor: "#1a1c20",
			borderColor: "#FFCD01",
			fontWeight: "bold",
		},
	},
	papper: {
		maxWidth: 700,
		margin: "0 auto",
		[theme.breakpoints.down("xs")]: {
			margin: "0 10px",
		},
	},
	gridContainerDetalle: {
		display: "grid",
		minHeight: "80vh",
		gridTemplateRows: "15vh 40px 1fr 40px",
		background: "rgba(0,0,0,.075)",
		[theme.breakpoints.down("xs")]: {
			fontSize: ".7em",
		},
	},
	row1: {
		display: "grid",
		gridTemplateColumns: "2fr 1fr 2fr",
		"& p": {
			border: "1px solid #000",
			margin: 0,
		},
	},
	col11: {
		paddingLeft: "1em",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	col12: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		"& span:last-child": {
			border: "1px solid rgba(0,0,0,.75)",
			display: "inline-block",
			marginTop: ".5em",
			width: "2em",
			height: "2em",
			lineHeight: "2em",
			textAlign: "center",
		},
	},
	col13: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		justifyContent: "center",
		paddingRight: "1em",
	},
	row2: {
		display: "grid",
		gridTemplateColumns: "20% 1fr 20%",
		"& p": {
			border: "1px solid #000",
			margin: 0,
		},
	},
	row3: {
		display: "grid",
		gridTemplateColumns: "20% 1fr 20%",
		"& p": {
			border: "1px solid #000",
			margin: 0,
		},
	},
	row4: {
		display: "grid",
		gridTemplateColumns: "20% 1fr 20%",
		"& p": {
			border: "1px solid #000",
			margin: 0,
		},
	},
}))

export default function DetalleBusqueda({ match }) {
	const classes = useStyles()
	const { keyword } = match.params
	const totalData = useFacturas()

	let myInfo
	if (totalData[0]) {
		totalData.map((each) => {
			if (each.id === match.params.id) {
				return (myInfo = each)
			}
		})
		const costo = myInfo[" neto "]
		const sucursal = myInfo.Sucursal
		const { proveedor, dia, mes, factura, detalle, computa, rubro } = myInfo
		const facType = Array.from(factura).splice(1, 1)
		return (
			<div className={classes.page}>
				<Link to={`/search/${keyword}`} className={classes.goBackButton}>
					Volver al Listado
				</Link>
				<Paper elevation={24} className={classes.papper}>
					<div className={classes.gridContainerDetalle}>
						<div className={classes.row1}>
							<p className={classes.col11}>
								<span>{sucursal}</span>
								<span>Razon Social</span>
								<span>{proveedor}</span>
							</p>
							<p className={classes.col12}>
								<span>Factura tipo</span>
								<span>{facType}</span>
							</p>
							<p className={classes.col13}>
								<span>{factura}</span>
								<span>
									Dia: {dia} Mes: {mes}
								</span>
							</p>
						</div>
						<div className={classes.row2}>
							<p>Cantidad</p>
							<p>Detalle</p>
							<p>Costo</p>
						</div>
						<div className={classes.row3}>
							<p>cant</p>
							<p>{detalle}</p>
							{costo > 0 ? <p>{costo}</p> : <p>{computa}</p>}
						</div>
						<div className={classes.row4}>
							<p>Rubro {rubro}</p>
							<p>Total</p>
							{costo > 0 ? <p>{costo}</p> : <p>{computa}</p>}
						</div>
					</div>
				</Paper>
			</div>
		)
	} else {
		return "CARGANDO..."
	}
}
