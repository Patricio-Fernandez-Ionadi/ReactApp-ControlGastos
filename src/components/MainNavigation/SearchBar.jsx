import React, { useState } from "react"
import { makeStyles, fade } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		marginLeft: 0,
		flex: 1,
		transition: "all .2s ease",
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}))

export default function SearchBar() {
	const classes = useStyles()
	const history = useHistory()

	const [keyword, setKeyword] = useState("")
	const handleChange = (evt) => {
		setKeyword(evt.target.value)
	}

	const handleSubmit = (evt) => {
		evt.preventDefault()
		history.push(`/search/${keyword}`)
		setKeyword("")
	}

	return (
		<>
			<form className={classes.search} onSubmit={handleSubmit}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder='Search…'
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					value={keyword}
					inputProps={{ "aria-label": "search" }}
					onChange={handleChange}
				/>
			</form>
		</>
	)
}
