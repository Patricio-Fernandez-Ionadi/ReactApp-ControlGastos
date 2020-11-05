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

				arr.map((each) => {
					if (each.factura !== undefined) {
						if (
							each.factura.toLowerCase().includes(keyword.toLowerCase()) &&
							each.proveedor !== undefined
						) {
							grouper(each, facturas)
						}
					}
				})

				arr.map((each) => {
					if (each.Sucursal !== undefined) {
						if (
							each.Sucursal.toLowerCase().includes(keyword.toLowerCase()) &&
							each.factura !== undefined
						) {
							grouper(each, sucursales)
						}
					}
				})

				arr.map((each) => {
					if (each.proveedor !== undefined) {
						if (
							each.proveedor.toLowerCase().includes(keyword.toLowerCase()) &&
							each.factura !== undefined
						) {
							grouper(each, proveedores)
						}
					}
				})
				setState([facturas, proveedores, sucursales])
			}
		})
	}, [setState, keyword])
	return state
}
