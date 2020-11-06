import { makeStyles } from "@material-ui/core"
import React from "react"
// Icons
import ImportExportIcon from "@material-ui/icons/ImportExport"
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap"
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic"
import AutorenewIcon from "@material-ui/icons/Autorenew"

const useStyles = makeStyles((theme) => ({
	cardsContainer: {
		maxWidth: "100vw",
		display: "grid",
		gap: "1em",
		gridTemplateColumns: "1fr",
		padding: "2em 1em",
		backgroundColor: "rgba(219, 40, 27, .8)",
		[theme.breakpoints.up("sm")]: {
			gridTemplateColumns: "repeat(2, 1fr)",
		},
		[theme.breakpoints.up("lg")]: {
			gridTemplateColumns: "repeat(4, 1fr)",
		},
	},
	cardsBody: {
		position: "relative",
		margin: "auto",
		height: "380px",
		maxWidth: "360px",
		padding: "1em",
		backgroundColor: "#fff",
		boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.5)",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.up("lg")]: {
			marginTop: "-50px",
		},
	},
	cardIcon: {
		position: "relative",
		width: "100%",
		height: "40%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	cardIconItem: {
		width: "100%",
		height: "100%",
		color: "#a57e0a",
	},
	cardTitle: {
		textAlign: "center",
		margin: 0,
		color: "#db281b",
	},
	cardText: {
		margin: 0,
		flex: 1,
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		alignSelf: "flex-end",
		color: "rgba(0,0,0,.5)",
	},
}))

export default function CardsPages({ info }) {
	const classes = useStyles()

	return (
		<div className={classes.cardsContainer}>
			<div className={classes.cardsBody}>
				<div className={classes.cardIcon}>
					<AutorenewIcon className={classes.cardIconItem} />
				</div>
				<h2 className={classes.cardTitle}>Actualizacion Constante</h2>
				<p className={classes.cardText}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
					nulla maxime voluptas modi. Cupiditate.
				</p>
			</div>
			<div className={classes.cardsBody}>
				<div className={classes.cardIcon}>
					<ImportExportIcon className={classes.cardIconItem} />
				</div>
				<h2 className={classes.cardTitle}>Busqueda de Precios</h2>
				<p className={classes.cardText}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
					nulla maxime voluptas modi. Cupiditate.
				</p>
			</div>
			<div className={classes.cardsBody}>
				<div className={classes.cardIcon}>
					<ZoomOutMapIcon className={classes.cardIconItem} />
				</div>
				<h2 className={classes.cardTitle}>Expansion Constante</h2>
				<p className={classes.cardText}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
					nulla maxime voluptas modi. Cupiditate.
				</p>
			</div>
			<div className={classes.cardsBody}>
				<div className={classes.cardIcon}>
					<HeadsetMicIcon className={classes.cardIconItem} />
				</div>
				<h2 className={classes.cardTitle}>Atencion Inmediata</h2>
				<p className={classes.cardText}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
					nulla maxime voluptas modi. Cupiditate.
				</p>
			</div>
		</div>
	)
}
