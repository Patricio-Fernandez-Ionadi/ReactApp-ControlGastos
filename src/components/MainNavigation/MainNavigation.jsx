import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
// Components
import SearchBar from "./SearchBar"
import ListOfLinks from "./ListOfLinks"
// func comp
import ScrollToTop from "./ScrollToTop"
import HideOnScroll from "./HideOnScroll"
// DRAWER
import Drawer from "@material-ui/core/Drawer"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { Link } from "react-router-dom"

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		background: "#db281b",
	},
	appBarShift: {
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "#ffcd01",
		boxShadow: "0 0 15px rgba(255, 205, 1, .5) inset",
	},
	hide: {
		display: "none",
	},
	// DRAWER
	navLogoContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	navLogo: {
		maxWidth: "80%",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		background: "#FFCD01",
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
	},
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}))

export default function MainNavigation(props) {
	const classes = useStyles()

	const [open, setOpen] = React.useState(false)
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}
	return (
		<>
			<HideOnScroll {...props}>
				{/* /////////////////////////////// APPBAR /////////////////////////////// */}
				<AppBar
					// position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						{/* //////////////////////////////////////////// */}
						<Typography variant='h6' noWrap>
							Gestion Mantenimiento
						</Typography>
						{/* //////////////////////////////////////////// */}
						<SearchBar />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar id='back-to-top-anchor' />
			{/* /////////////////////////////// DRAWER /////////////////////////////// */}
			<Drawer
				onClick={handleDrawerClose}
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<Link to='/' className={classes.navLogoContainer}>
						<img
							className={classes.navLogo}
							src='/assets/images/logo.png'
							alt='logo Diarco'
						/>
					</Link>
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				{/* ///////////////////////// Lista de Links ///////////////////////////// */}
				<ListOfLinks />
			</Drawer>

			<ScrollToTop {...props} />
		</>
	)
}
