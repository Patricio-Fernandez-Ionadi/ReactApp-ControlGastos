import React from "react"
// Components
import CardsPages from "../../components/Cards/CardsPages"
// import HeaderPages from "../../components/HeaderPages/HeaderPages"
// import HeroPages from "../../components/HeaderPages/HeroPages"

// -----------------------------------------------
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	heroContainer: {
		width: "100%",
		height: "calc(100vh - 56px)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	sucContainer: {
		backgroundImage: "url('/assets/images/diarcoCalafate.jpg')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	barContainer: {
		backgroundImage: "url('/assets/images/diarcoBarrio.jpg')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}))

export default function Home() {
	const classes = useStyles()
	return (
		<>
			{/* <HeaderPages titleofpage='Administracion Casa Central' />
			<HeroPages
				uppertext='La mejor forma'
				lowertext='de ver nuestra gestión'
				src='/assets/images/home.jpg'
			/> */}

			<div className={classes.heroContainer}>
				<div className={classes.sucContainer}>
					<button>Sucusales</button>
				</div>
				<div className={classes.barContainer}>
					<button>Diarco Barrio</button>
				</div>
			</div>

			<CardsPages />
		</>
	)
}
