import React from "react"
import { Link } from "react-router-dom"
// Styles
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	heroContainer: {
		width: "100%",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "5px",
		gap: "10px",
		boxSizing: "border-box",
		background: "#222",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
		},
	},
	sucContainer: {
		backgroundImage: "url('/assets/images/diarcoCalafate.jpg')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textDecoration: "none",
		[theme.breakpoints.up("md")]: {
			opacity: ".5",
			transition: "all .2s ease",
			"&:hover": {
				opacity: 1,
			},
		},
	},
	barContainer: {
		backgroundImage: "url('/assets/images/diarcoBarrio.jpg')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textDecoration: "none",
		[theme.breakpoints.up("md")]: {
			opacity: ".5",
			transition: "all .2s ease",
			"&:hover": {
				opacity: 1,
			},
		},
	},
	button: {
		backgroundColor: "#222",
		color: "#ffcd01",
		fontWeight: "bold",
		height: "40px",
		width: "200px",
		"&:hover": {
			color: "#db281b",
			backgroundColor: "#ffcd01",
		},
	},
}))

export default function Landing() {
	const classes = useStyles()
	return (
		<>
			<div className={classes.heroContainer}>
				<Link to='/sucursales' className={classes.sucContainer}>
					<Button variant='contained' className={classes.button}>
						Sucusales
					</Button>
				</Link>
				<Link to='/diarcoBarrio' className={classes.barContainer}>
					<Button variant='contained' className={classes.button}>
						Diarco Barrio
					</Button>
				</Link>
			</div>
		</>
	)
}
