import React from "react";
import logo from "../images/logo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Header.css";



export const Header = () => {
    return (
			<div className="header">
				<Image className=" logo" src={logo} thumbnail />
				<h3>VW BIRTOUTA 59 , RUE ALI BOUHADJA(EN FACE LA DAIRA)</h3>
				<i class="fas fa-phone-alt fa-2x"> 0078 2348 498 - 055 2103 637</i>
				<h3>
					مفتوح من السبت إلى الخميس من الساعة 8:00 صباحًا حتى الساعة 18:30 مساءً
				</h3>
				<h3>Ouvert du samedi au jeudi de 08h00 à 18h30</h3>
			</div>
		);
};
export default Header;
/*
<Container>
					<Row>
						<Col xs={6} md={4}>
							<Image className=" logo" src={logo} thumbnail />
						</Col>
					</Row>
				</Container>
*/