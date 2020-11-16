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
	switch (rubro) {
		case 1:
			rubro = "Servicio tecnico de frio"
			break
		case 2:
			rubro = "Repuestos de frio"
			break
		case 3:
			rubro = "Compresores"
			break
		case 4:
			rubro = "Servicios varios"
			break
		case 5:
			rubro = "Materiales electricos"
			break
		case 6:
			rubro = "Servicios sanitarios"
			break
		case 7:
			rubro = "Generadores"
			break
		case 8:
			rubro = "Repuestos carretas / Ferretería / Varios"
			break
		case 9:
			rubro = "Matafuegos"
			break
		case 10:
			rubro = "Albañilería / Pinturería"
			break
		case 11:
			rubro = "Servicio Técnico Autoelevadores"
			break
		case 12:
			rubro = "Repuestos Autoelevadores"
			break
		default:
			rubro = "desconocido"
	}

	// FOR MENU CARDS
	const [expanded, setExpanded] = React.useState(false)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}
	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}

	const mobileMenuId = "primary-search-account-menu-mobile"
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
