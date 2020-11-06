import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import HeroPages from "../../components/HeaderPages/HeroPages"
import CardsPages from "../../components/Cards/CardsPages"

// const CARDS_INFO = [
// 	{
// 		logo: "AutorenewIcon",
// 		title: "Actualizacion Constante",
// 		text:
// 			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in nulla maxime voluptas modi. Cupiditate.",
// 	},
// 	{
// 		logo: "ImportExportIcon",
// 		title: "Busqueda de Precios",
// 		text:
// 			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in nulla maxime voluptas modi. Cupiditate.",
// 	},
// 	{
// 		logo: "ZoomOutMapIcon",
// 		title: "Expansion Constante",
// 		text:
// 			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in nulla maxime voluptas modi. Cupiditate.",
// 	},
// 	{
// 		logo: "HeadsetMicIcon",
// 		title: "Atencion Inmediata",
// 		text:
// 			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in nulla maxime voluptas modi. Cupiditate.",
// 	},
// ]

export default function Home() {
	return (
		<>
			<HeaderPages titleofpage='Administracion Casa Central' />
			<HeroPages
				uppertext='La mejor forma'
				lowertext='de ver nuestra gestión'
				src='/assets/images/home.jpg'
			/>
			{/* <CardsPages info={CARDS_INFO} /> */}
			<CardsPages />
		</>
	)
}
