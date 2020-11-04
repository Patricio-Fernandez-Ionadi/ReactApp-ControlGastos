import React from "react"
// Components
import HeaderPages from "../../components/HeaderPages/HeaderPages"
// Styles
import styled from "styled-components"

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

export default function Home() {
	return (
		<>
			<div>
				<HeaderPages titleofpage='Administracion Casa Central' />
				<div>
					<Hero>
						<HeroTitles>
							<Texts>La mejor forma</Texts>
							<Texts>de ver nuestra gestión</Texts>
						</HeroTitles>
					</Hero>
				</div>
			</div>
		</>
	)
}
