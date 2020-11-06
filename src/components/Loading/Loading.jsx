import { makeStyles } from "@material-ui/core"
import React from "react"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		margin: "auto",
	},
	top: {
		color: "transparent",
		animationDuration: "1500ms",
		position: "absolute",
		display: "inline-block",
		left: "45%",
		backgroundImage: "url('/assets/images/loading.png')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down("xs")]: {
			left: "38%",
		},
	},
	circle: {
		strokeLinecap: "round",
	},
}))

export default function Loading(props) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<CircularProgress
				variant='indeterminate'
				disableShrink
				className={classes.top}
				classes={{
					circle: classes.circle,
				}}
				size={100}
				thickness={4}
				{...props}
			/>
		</div>
	)
}
