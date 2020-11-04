import { useEffect, useState } from "react"
import { getDBResult } from "../services/getJsonData"
export default function useProveedores({ keyword } = {}) {
	const [state, setState] = useState([])
	useEffect(() => {
		getDBResult((arr) => {
			const proveedoresFiltered = arr.filter((dato) => {
				if (dato !== undefined && dato.proveedor !== undefined) {
					if (keyword) {
						return dato.proveedor.toLowerCase().includes(keyword.toLowerCase())
					} else {
						return dato.proveedor
					}
				}
				return false
			})
			setState(proveedoresFiltered)
		})
	}, [setState, keyword])
	return state
}
