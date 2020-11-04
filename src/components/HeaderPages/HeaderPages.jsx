import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
	headerContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#FFCD01",
	},
	headerTitle: {
		margin: "0 0 15px",
		padding: 0,
		fontSize: "2em",
	},
})

export default function HeaderPages({ titleofpage }) {
	const classes = useStyles()
	return (
		<div className={classes.headerContainer}>
			<h1 className={classes.headerTitle}>{titleofpage}</h1>
		</div>
	)
}
