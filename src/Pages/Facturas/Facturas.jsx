import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"
// Styles
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	listContainer: {
		width: "90%",
		minHeight: "800px",
		backgroundColor: "#ccc",
		margin: "auto",
	},
}))

export default function Facturas() {
	const classes = useStyles()
	return (
		<>
			<HeaderPages titleofpage='Facturas' />
			<HeroPages
				uppertext='Encontra lo que buscas'
				lowertext='En la mejor App de gestion'
				src='/assets/images/desk.jpg'
			/>

			<div>
				<h1>Listado de facturas</h1>

				<div className={classes.listContainer}></div>
			</div>
		</>
	)
}
