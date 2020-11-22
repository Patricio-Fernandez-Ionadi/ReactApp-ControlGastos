import React from "react"
// Components
import MainNavigation from "../../components/MainNavigation/MainNavigation"
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"

export default function GastosSuc() {
	return (
		<div>
			<MainNavigation />
			<HeaderPages titleofpage='Gastos' />
			<HeroPages
				uppertext='Lo mas importante'
				lowertext='es saber gastar'
				src='/assets/images/gastos.jpg'
			/>
		</div>
	)
}
