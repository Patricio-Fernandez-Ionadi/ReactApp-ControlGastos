import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"

export default function Facturas() {
	return (
		<>
			<HeaderPages titleofpage='Facturas' />
			<HeroPages
				uppertext='Encontra lo que buscas'
				lowertext='En la mejor App de gestion'
				src='/assets/images/desk.jpg'
			/>

			<div>
				<h1>Listado de facturas</h1>
			</div>
		</>
	)
}
