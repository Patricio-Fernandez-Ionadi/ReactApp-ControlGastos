import { makeStyles } from "@material-ui/core"
import React from "react"

export default function HeroPages({ uppertext, lowertext, src }) {
	const useStyles = makeStyles((theme) => ({
		hero: {
			backgroundImage: `url(${src})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			height: "calc(100vh - 111px)",
			[theme.breakpoints.up("sm")]: {
				height: "calc(100vh - 119px)",
			},
		},
		heroTitles: {
			height: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center",
		},
		heroText: {
			margin:0,
			textAlign: "center",
			fontSize: "2em",
			color: "#ffcd01",
			textShadow: "0 0 15px #000",
		},
		heroTextShadow:{
			// backgroundColor : "red",
			// borderRadius: "4em",
		}
	}))
	const classes = useStyles()
	return (
		<div className={classes.hero}>
			<div className={classes.heroTitles}>
				<div className={classes.heroTextShadow}>
				<p className={classes.heroText}>{uppertext}</p>
				</div>

				<div className={classes.heroTextShadow}>
				<p className={classes.heroText}>{lowertext}</p>
				</div>
					
			</div>
		</div>
	)
}
