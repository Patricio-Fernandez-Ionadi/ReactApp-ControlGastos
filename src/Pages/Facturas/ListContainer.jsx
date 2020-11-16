import React, { useEffect, useState } from "react"
// Hooks
import { useParams } from "react-router-dom"

// Components
import ListItem from "./ListItem"
import Loading from "../../components/Loading/Loading"
// Styles
import { makeStyles } from "@material-ui/core"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

const useStyles = makeStyles((theme) => ({
	listContainer: {
		margin: "auto",
		maxHeight: "100vh",
		display: "grid",
		gap: "2px",
		backgroundColor: "#1a1c20",
		paddingTop: "30px",
		overflow: "scroll",
		position: "relative",
	},
	listHeader: {
		width: "90%",
		maxWidth: "1000px",
		border: "2px solid #1a1c20",
		borderRadius: "1em 1em 0 0",
		display: "grid",
		padding: "10px",
		height: "4em",
		position: "absolute",
		top: "30px",
		left: "50%",
		transform: "translateX(-50%)",
		gridTemplateColumns: "repeat(2, 1fr)",
		backgroundColor: "#FFCD01",
		"& p": {
			margin: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "#1a1c20",
			"&:nth-child(3)": {
				opacity: ".5",
			},
			"&:nth-child(4)": {
				opacity: ".5",
			},
			[theme.breakpoints.up("sm")]: {
				"&:nth-child(3)": {
					display: "none",
				},
				"&:nth-child(4)": {
					display: "none",
				},
			},
		},
		[theme.breakpoints.up("sm")]: {
			gridTemplateColumns: "repeat(4, 1fr)",
			gap: "10px",
			height: "2em",
		},
	},
	listItem: {
		display: "grid",
		height: "3em",
		gridTemplateColumns: "repeat(2, 1fr)",
		fontSize: ".8em",
		backgroundColor: "#51adcf",
		textDecoration: "none",
		transition: "all .1s ease",
		overflow: "hidden",

		"& p": {
			margin: 0,
			textAlign: "center",
			color: "#1a1c20",
		},
		"&:nth-child(even)": {
			backgroundColor: "#0278ae",
		},
		"&:active": {
			backgroundColor: "rgba(255, 205, 1)",
			fontWeight: "bold",
		},
		[theme.breakpoints.up("sm")]: {
			gridTemplateColumns: "repeat(4, 1fr)",
			gap: "10px",
			fontSize: "1em",
			"& p": {
				lineHeight: "3em",
			},
			"&:hover": {
				backgroundColor: "rgba(255, 205, 1)",
				// transform: "scale(1.01)",     		// bajada de fps
				// fontWeight: "bold",					// najada de fps
			},
		},
	},
	listItemContainer: {
		margin: "90px auto 30px",
		maxHeight: "80vh",
		width: "90%",
		maxWidth: "1000px",
		overflow: "scroll",
		overflowX: "hidden",
		display: "grid",
		gap: "2px",
		[theme.breakpoints.up("sm")]: {
			marginTop: "55px",
		},
	},
}))

export default function ListContainer({ info }) {
	const classes = useStyles()

	if (info !== undefined) {
		return (
			<div className={classes.listContainer}>
				<div className={classes.listHeader}>
					<p>Factura</p>
					<p>Proveedor</p>
					<p>
						<KeyboardArrowDownIcon />
					</p>
					<p>
						<KeyboardArrowDownIcon />
					</p>
					<p>sucursal</p>
					<p>Fecha</p>
				</div>
				<div className={classes.listItemContainer}>
					<ListItem info={info} classes={classes} />
				</div>
			</div>
		)
	} else {
		return <Loading />
	}
}
