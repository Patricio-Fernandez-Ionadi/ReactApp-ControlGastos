import { useEffect, useState } from "react"
import { getDBResult } from "../services/getJsonData"
export default function useTotalData({ keyword } = {}) {
	const [state, setState] = useState([])
	useEffect(() => {
		getDBResult((arr) => {
			const facturasFiltered = arr.filter((dato) => {
				if (dato !== undefined && dato.factura !== undefined) {
					if (keyword) {
						return dato.factura.toLowerCase().includes(keyword.toLowerCase())
					} else {
						return dato.factura
					}
				}
				return false
			})
			setState(facturasFiltered)
		})
	}, [setState, keyword])
	return state
}
