import React from "react"
import { Link } from "react-router-dom"
// Styles
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import { red } from "@material-ui/core/colors"
// cards
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
// actions
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
// icons
import IconButton from "@material-ui/core/IconButton"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreIcon from "@material-ui/icons/MoreVert"
// card menu
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 365,
		width: 365,
		position: "relative",
		[theme.breakpoints.down("xs")]: {
			width: 300,
		},
	},
	link: {
		display: "inline-block",
		textDecoration: "none",
		color: "#09f",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		margin: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	expandedContent: {
		background: "rgba(0,0,0,.2)",
		boxShadow: "0 3px 3px 0 rgba(0,0,0,.2) inset ",
	},
	avatar: {
		backgroundColor: red[500],
		width: "auto",
		padding: "0 20px",
		borderRadius: "6px",
	},
	apertura: {
		color: "red",
	},
	sectionMobile: {
		display: "flex",
	},
}))

export default function SearchResultCard({
	id,
	keyword,
	sucursal,
	proveedor,
	factura,
	costo,
	computa,
	detalle,
	dia,
	mes,
	rubro,
}) {
	const classes = useStyles()
	const [expanded, setExpanded] = React.useState(false)
	if (rubro === 1) {
		rubro = "Servicio tecnico de frio"
	} else if (rubro === 2) {
		rubro = "Repuestos de frio"
	} else if (rubro === 3) {
		rubro = "Compresores"
	} else if (rubro === 4) {
		rubro = "Servicios varios"
	} else if (rubro === 5) {
		rubro = "Materiales electricos"
	} else if (rubro === 6) {
		rubro = "Servicios sanitarios"
	} else if (rubro === 7) {
		rubro = "Generadores"
	} else if (rubro === 8) {
		rubro = "Repuestos carretas / Ferretería / Varios"
	} else if (rubro === 9) {
		rubro = "Matafuegos"
	} else if (rubro === 10) {
		rubro = "Albañilería / Pinturería"
	} else if (rubro === 11) {
		rubro = "Servicio Técnico Autoelevadores"
	} else if (rubro === 12) {
		rubro = "Repuestos Autoelevadores"
	} else {
		rubro = "desconocido"
	}
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	// FOR MENU CARDS
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}
	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}
	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}
	const mobileMenuId = "primary-search-account-menu-mobile"
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			// anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<Link to={`/search/${keyword}/${id}`} className={classes.link}>
					Ver Mas Detalles
				</Link>
			</MenuItem>
		</Menu>
	)
	// FOR MENU CARDS

	return (
		<Grid item>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label='recipe' className={classes.avatar}>
							{sucursal}
						</Avatar>
					}
					action={
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
							>
								<MoreIcon />
							</IconButton>
						</div>
					}
					title={proveedor}
					subheader={`Dia: ${dia} Mes: ${mes}`}
				/>
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						Factura N° {factura}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Rubro: {rubro}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>

				<Collapse
					in={expanded}
					timeout='auto'
					unmountOnExit
					className={classes.expandedContent}
				>
					<CardContent>
						<div>
							{costo > 0 ? (
								<Typography variant='body2' color='textSecondary'>
									Costo Neto : ${costo}-
								</Typography>
							) : (
								<Typography variant='body2' className={classes.apertura}>
									Costo Neto : ${computa}- No Computa
								</Typography>
							)}
						</div>
					</CardContent>
				</Collapse>
			</Card>
			{renderMobileMenu}
		</Grid>
	)
}
