import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
// Styles
import styled from "styled-components"
// Icons
import AutorenewIcon from "@material-ui/icons/Autorenew"
import ImportExportIcon from "@material-ui/icons/ImportExport"
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap"
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic"

const Hero = styled.div`
	background-image: url("/assets/images/home.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 50vh;
`
const HeroTitles = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2em;
`
const Texts = styled.p`
	font-size: 2em;
	color: #ffcd01;
	text-shadow: 0 0 10px #222831;
`
const Cards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	padding: 0 1em 30px;
	gap: 10px;
	background: transparent;
	background: -webkit-linear-gradient(
		to bottom,
		transparent,
		transparent 60%,
		#db281b 80%,
		#db281b
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to bottom,
		transparent,
		transparent 60%,
		#db281b 90%,
		#db281b
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	@media (min-width: 640px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		position: relative;
		top: -40px;
	}
	@media (min-width: 1000px) {
		justify-content: space-around;
	}
`
const Card = styled.div`
	background-color: #fff;
	height: 300px;
	max-width: 250px;
	padding: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
`
const IconCardOne = styled(AutorenewIcon)`
	width: 40%;
	height: 20%;
	position: relative;
	left: 50%;
	color: #ffcd01;
	transform: translateX(-50%);
`
const IconCardTwo = styled(ImportExportIcon)`
	width: 40%;
	height: 20%;
	position: relative;
	left: 50%;
	color: #ffcd01;
	transform: translateX(-50%);
`
const IconCardThree = styled(ZoomOutMapIcon)`
	width: 40%;
	height: 20%;
	position: relative;
	left: 50%;
	color: #ffcd01;
	transform: translateX(-50%);
`
const IconCardFour = styled(HeadsetMicIcon)`
	width: 40%;
	height: 20%;
	position: relative;
	left: 50%;
	color: #ffcd01;
	transform: translateX(-50%);
`
const CardTitle = styled.p`
	text-align: center;
	font-size: 1.5em;
	color: #db281b;
	font-weight: bold;
`
const CardText = styled.p`
	color: #222831;
	text-align: center;
`

export default function Home() {
	return (
		<>
			<HeaderPages titleofpage='Administracion Casa Central' />
			<Hero>
				<HeroTitles>
					<Texts>La mejor forma</Texts>
					<Texts>de ver nuestra gestión</Texts>
				</HeroTitles>
			</Hero>
			<Cards>
				<Card>
					<IconCardOne />
					<CardTitle>Actualizacion Constante</CardTitle>
					<CardText>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
						nulla maxime voluptas modi. Cupiditate.
					</CardText>
				</Card>
				<Card>
					<IconCardTwo />
					<CardTitle>Busqueda de Precios</CardTitle>
					<CardText>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
						nulla maxime voluptas modi. Cupiditate.
					</CardText>
				</Card>
				<Card>
					<IconCardThree />
					<CardTitle>Expansion Constante</CardTitle>
					<CardText>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
						nulla maxime voluptas modi. Cupiditate.
					</CardText>
				</Card>
				<Card>
					<IconCardFour />
					<CardTitle>Atencion Inmediata</CardTitle>
					<CardText>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in
						nulla maxime voluptas modi. Cupiditate.
					</CardText>
				</Card>
			</Cards>
		</>
	)
}
