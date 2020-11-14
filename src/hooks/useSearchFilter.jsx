import { useEffect, useState } from "react"
import { getDBResult } from "../services/getJsonData"

export default function useSearchFilter({ keyword } = {}) {
	const [state, setState] = useState([])
	useEffect(() => {
		getDBResult((arr) => {
			let facturas = []
			let sucursales = []
			let proveedores = []
			if (keyword) {
				const grouper = (pushing, where) => {
					where.push(pushing)
					return where
				}

				arr
					.filter((eachFilt) => eachFilt.factura !== undefined)
					.map((eachMap) =>
						eachMap.factura.toLowerCase().includes(keyword.toLowerCase()) &&
						eachMap.proveedor !== undefined
							? grouper(eachMap, facturas)
							: false
					)

				arr
					.filter((eachFilt) => eachFilt.Sucursal !== undefined)
					.map((eachMap) =>
						eachMap.Sucursal.toLowerCase().includes(keyword.toLowerCase()) &&
						eachMap.proveedor !== undefined
							? grouper(eachMap, sucursales)
							: false
					)

				arr
					.filter((eachFilt) => eachFilt.proveedor !== undefined)
					.map((eachMap) =>
						eachMap.proveedor.toLowerCase().includes(keyword.toLowerCase()) &&
						eachMap.proveedor !== undefined
							? grouper(eachMap, proveedores)
							: false
					)

				setState([facturas, proveedores, sucursales])
			}
		})
	}, [setState, keyword])
	return state
}
