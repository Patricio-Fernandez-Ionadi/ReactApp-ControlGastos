import React from "react"

import { makeStyles } from "@material-ui/core/styles"
// go top button
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

const useStyles = makeStyles((theme) => ({
	gotop: {
		position: "fixed",
		background: "rgba(219, 40, 27, .8)",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		color: "#ffcd01",
		zIndex: 10,
		"&:hover": {
			background: "#ffcd01",
			color: "#DB281B",
		},
	},
}))

export default function ScrollToTop(props) {
	const classes = useStyles()
	return (
		<>
			<ScrollTop {...props}>
				<Fab
					// color='secondary'
					size='small'
					aria-label='scroll back to top'
					className={classes.gotop}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</>
	)
}

function ScrollTop(props) {
	const { children, window } = props
	const classes = useStyles()
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	})

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		)

		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" })
		}
	}

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role='presentation' className={classes.root}>
				{children}
			</div>
		</Zoom>
	)
}
