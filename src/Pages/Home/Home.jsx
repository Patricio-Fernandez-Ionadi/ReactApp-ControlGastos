import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"
import CardsPages from "../../components/Cards/CardsPages"

export default function Home() {
	return (
		<>
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
