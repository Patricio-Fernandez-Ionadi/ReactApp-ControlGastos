import React from "react"
// Components
import MainNavigation from "../../components/MainNavigation/MainNavigation"
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"

export default function PromediosSuc() {
	return (
		<div>
			<MainNavigation />
			<HeaderPages titleofpage='Promedios' />
			<HeroPages
				uppertext='Los gastos más reelevantes'
				lowertext='al alcance de tu mano'
				src='/assets/images/gastos.jpg'
			/>
		</div>
	)
}
