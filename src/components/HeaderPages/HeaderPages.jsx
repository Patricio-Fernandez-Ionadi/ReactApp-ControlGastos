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
		padding: "0 15px",
		fontSize: "1.3em",
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
