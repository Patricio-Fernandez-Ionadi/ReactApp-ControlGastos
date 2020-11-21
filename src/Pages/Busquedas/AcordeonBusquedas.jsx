import React, { useEffect, useState } from "react"
// Styles
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
// Components
import Loading from "../../components/Loading/Loading"
// Hooks
import { useParams } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	holyContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	acordStyles: {
		backgroundColor: "rgba(255,255,255,.2)",
		margin: "auto",
	},
	root: {
		maxWidth: "1280px",
		width: "90%",
	},
	heading: {
		width: "100%",
		color: "#ffcd01",
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	summaryStyles: {
		backgroundColor: "rgba(219, 40, 27,.6)",
	},
	expanded: {
		display: "flex",
		flexWrap: "wrap",
		gap: "10px",
		justifyContent: "space-around",
		backgroundColor: "rgba(255, 205, 1,.5)",
	},
	expandIconStyles: {
		color: "#ffcd01",
	},
}))

export default function AcordeonBusquedas({ info }) {
	const classes = useStyles()

	// get the keyword for no matches cases
	const paramsFromRoute = useParams()
	const { keyword } = paramsFromRoute
	// time out loading in case no matches
	const [loadingTime, setLoadingTime] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoadingTime(false)
		}, 5000)
	}, [setLoadingTime])

	let matchedSucursales = []
	let matchedFacturas = []
	let matchedProveedores = []
	let toMap = info.props.children.props.children

	if (toMap[0] !== undefined) {
		toMap.map((each) =>
			each.props.sucursal
				.toLowerCase()
				.includes(each.props.keyword.toLowerCase())
				? matchedSucursales.push(each)
				: false
		)

		toMap.map((each) =>
			each.props.factura
				.toLowerCase()
				.includes(each.props.keyword.toLowerCase())
				? matchedFacturas.push(each)
				: false
		)

		toMap.map((each) =>
			each.props.proveedor
				.toLowerCase()
				.includes(each.props.keyword.toLowerCase())
				? matchedProveedores.push(each)
				: false
		)
	}

	if (matchedFacturas[0] || matchedProveedores[0] || matchedSucursales[0]) {
		return (
			<div className={classes.holyContainer}>
				<div className={classes.root}>
					{matchedFacturas[0] ? (
						<Accordion className={classes.acordStyles}>
							<AccordionSummary
								expandIcon={
									<ExpandMoreIcon className={classes.expandIconStyles} />
								}
								aria-controls='panel1a-content'
								id='panel1a-header'
								className={classes.summaryStyles}
							>
								<Typography className={classes.heading}>Facturas</Typography>
							</AccordionSummary>
							<AccordionDetails className={classes.expanded}>
								{matchedFacturas.map((each) => {
									return each
								})}
							</AccordionDetails>
						</Accordion>
					) : null}

					{matchedProveedores[0] ? (
						<Accordion className={classes.acordStyles}>
							<AccordionSummary
								className={classes.summaryStyles}
								expandIcon={
									<ExpandMoreIcon className={classes.expandIconStyles} />
								}
								aria-controls='panel2a-content'
								id='panel2a-header'
							>
								<Typography className={classes.heading}>Proveedores</Typography>
							</AccordionSummary>
							<AccordionDetails className={classes.expanded}>
								{matchedProveedores.map((each) => {
									return each
								})}
							</AccordionDetails>
						</Accordion>
					) : null}

					{matchedSucursales[0] ? (
						<Accordion className={classes.acordStyles}>
							<AccordionSummary
								className={classes.summaryStyles}
								expandIcon={
									<ExpandMoreIcon className={classes.expandIconStyles} />
								}
								aria-controls='panel2a-content'
								id='panel2a-header'
							>
								<Typography className={classes.heading}>Sucursales</Typography>
							</AccordionSummary>
							<AccordionDetails className={classes.expanded}>
								{matchedSucursales.map((each) => {
									return each
								})}
							</AccordionDetails>
						</Accordion>
					) : null}
				</div>
			</div>
		)
	} else if (!loadingTime) {
		return (
			<>
				<div className={classes.noMatchContainer}>
					<h1 className={classes.noMatchAlert}>
						There are no matching results for the keyword: "{keyword}"
					</h1>
				</div>
			</>
		)
	} else {
		return <Loading />
	}
}
