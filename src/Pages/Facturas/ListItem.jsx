import React from "react"
import { Link } from "react-router-dom"

export default function ListItem({ info, classes }) {
	return (
		<>
			{info.map((each) => {
				return (
					<Link to='/' className={classes.listItem} key={each.id}>
						<p>{each.factura}</p>
						<p>{each.proveedor}</p>
						<p>{each.Sucursal}</p>
						<p>
							{each.dia}/{each.mes}/2020
						</p>
					</Link>
				)
			})}
		</>
	)
}
