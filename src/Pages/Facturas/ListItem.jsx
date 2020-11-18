import React from "react"
import { Link } from "react-router-dom"

export default function ListItem({ info, classes }) {
	return (
		<>
			{info.map((each) => {
				return (
					<Link
						to={`/facturas/${each.id}`}
						className={classes.listItem}
						key={each.id}
					>
						<p>{each.factura}</p>
						<p>{each.proveedor}</p>
						<p>{each.sucursal}</p>
						<p>
							{each.dia}/{each.mes}/2020
						</p>
					</Link>
				)
			})}
		</>
	)
}
