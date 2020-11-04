import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
// icons
import HomeIcon from "@material-ui/icons/Home"
import StoreIcon from "@material-ui/icons/Store"
import DescriptionIcon from "@material-ui/icons/Description"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import CategoryIcon from "@material-ui/icons/Category"
import AssessmentIcon from "@material-ui/icons/Assessment"

const useStyles = makeStyles({
	listItem: {
		"&:hover": {
			background: "rgba(219, 40, 27, .9)",
		},
	},
	listLink: {
		textDecoration: "none",
		color: "#DB281B",
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "space-between",
		"&:hover": {
			color: "#FFCD01",
		},
		"& span": {
			flex: "1",
			display: "inline-block",
			textAlign: "center",
		},
	},
})

export default function ListOfLinks() {
	const classes = useStyles()
	return (
		<>
			<Divider />
			<List>
				<ListItem button className={classes.listItem}>
					<Link to='/' className={classes.listLink}>
						<span>Home</span>
						<HomeIcon />
					</Link>
				</ListItem>

				<ListItem button className={classes.listItem}>
					<Link to='/facturas' className={classes.listLink}>
						<span>Facturas</span>
						<DescriptionIcon />
					</Link>
				</ListItem>

				<ListItem button className={classes.listItem}>
					<Link to='/proveedores' className={classes.listLink}>
						<span>Proveedores</span>
						<LocalShippingIcon />
					</Link>
				</ListItem>

				<ListItem button className={classes.listItem}>
					<Link to='/gastos' className={classes.listLink}>
						<span>Gastos</span>
						<MonetizationOnIcon />
					</Link>
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button className={classes.listItem}>
					<Link to='/promedios' className={classes.listLink}>
						<span>Promedios</span>
						<AssessmentIcon />
					</Link>
				</ListItem>

				<ListItem button className={classes.listItem}>
					<Link to='/sucursales' className={classes.listLink}>
						<span>Sucursales</span>
						<StoreIcon />
					</Link>
				</ListItem>

				<ListItem button className={classes.listItem}>
					<Link to='/rubros' className={classes.listLink}>
						<span>Rubros</span>
						<CategoryIcon />
					</Link>
				</ListItem>
			</List>
		</>
	)
}
