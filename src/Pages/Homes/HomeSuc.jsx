import React from "react"
// Components
import MainNavigation from "../../components/MainNavigation/MainNavigation"
import CardsPages from "../../components/Cards/CardsPages"
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"

export default function HomeSuc() {
	return (
		<>
			<MainNavigation />
			<HeaderPages titleofpage='Administracion Casa Central' />
			<HeroPages
				uppertext='La mejor forma'
				lowertext='de ver nuestra gestión'
				src='/assets/images/home.jpg'
			/>
			<CardsPages />
		</>
	)
}
