import React from "react"
// hooks
import useFacturas from "../../hooks/useFacturas"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"
import ListContainer from "./ListContainer"

export default function Facturas() {
	const info = useFacturas()
	return (
		<>
			<HeaderPages titleofpage='Facturas' />
			<HeroPages
				uppertext='Encontra lo que buscas'
				lowertext='En la mejor App de gestion'
				src='/assets/images/desk.jpg'
			/>
			<ListContainer info={info} />
		</>
	)
}
