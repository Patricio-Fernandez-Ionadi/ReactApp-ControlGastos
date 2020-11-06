import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"

export default function Facturas() {
	return (
		<div>
			<HeaderPages titleofpage='Gastos' />
			<HeroPages
				uppertext='Lo mas importante'
				lowertext='es saber gastar'
				src='/assets/images/gastos.jpg'
			/>
		</div>
	)
}
