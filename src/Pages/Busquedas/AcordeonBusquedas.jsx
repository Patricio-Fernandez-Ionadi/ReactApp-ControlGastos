import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Loading from "../../components/Loading/Loading"

const useStyles = makeStyles((theme) => ({
	acordStyles: {
		backgroundColor: "rgba(255,255,255,.2)",
	},
	root: {
		width: "100%",
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
		backgroundColor: "rgba(255, 205, 1,.5)",
	},
	expandIconStyles: {
		color: "#ffcd01",
	},
}))

export default function AcordeonBusquedas({
	sucursales,
	facturas,
	proveedores,
}) {
	const classes = useStyles()

	if (sucursales && proveedores && facturas) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel1a-content'
						id='panel1a-header'
						className={classes.summaryStyles}
					>
						<Typography className={classes.heading}>Facturas</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{facturas}
					</AccordionDetails>
				</Accordion>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Proveedores</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{proveedores}
					</AccordionDetails>
				</Accordion>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Sucursales</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{sucursales}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else if (sucursales && proveedores) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Proveedores</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{proveedores}
					</AccordionDetails>
				</Accordion>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Sucursales</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{sucursales}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else if (sucursales && facturas) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography className={classes.heading}>Facturas</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{facturas}
					</AccordionDetails>
				</Accordion>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Sucursales</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{sucursales}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else if (facturas && proveedores) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography className={classes.heading}>Facturas</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{facturas}
					</AccordionDetails>
				</Accordion>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Proveedores</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{proveedores}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else if (facturas) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography className={classes.heading}>Facturas</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{facturas}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else if (sucursales) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Sucursales</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{sucursales}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else if (proveedores) {
		return (
			<div className={classes.root}>
				<Accordion className={classes.acordStyles}>
					<AccordionSummary
						className={classes.summaryStyles}
						expandIcon={<ExpandMoreIcon className={classes.expandIconStyles} />}
						aria-controls='panel2a-content'
						id='panel2a-header'
					>
						<Typography className={classes.heading}>Proveedores</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.expanded}>
						{proveedores}
					</AccordionDetails>
				</Accordion>
			</div>
		)
	} else {
		return <Loading />
	}
}
