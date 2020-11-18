import { useEffect, useState } from "react"
import { getDBResult } from "../services/getJsonData"
export default function useSucursales({ keyword } = {}) {
	const [state, setState] = useState([])
	useEffect(() => {
		getDBResult((arr) => {
			const sucursalesFiltered = arr.filter((dato) => {
				if (dato !== undefined && dato.dia !== undefined) {
					if (keyword) {
						return dato.sucursal.toLowerCase().includes(keyword.toLowerCase())
					} else {
						return dato.sucursal
					}
				}
				return false
			})
			setState(sucursalesFiltered)
		})
	}, [setState, keyword])
	console.log(state)
	return state
}
