import React from 'react';
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import pic1  from "../images/bosch.png";
import pic2  from "../images/elf.png";
import pic3 from "../images/febi.png";
import pic4 from "../images/dayco.png";
import pic5 from "../images/gates.png";
import pic6 from "../images/hella.png";
import pic7 from "../images/liqimoly.png";
import pic8 from "../images/mann.png";
import pic9 from "../images/total.png";
import pic10 from "../images/value.png";
import pic11 from "../images/castrol.png";
import pic12 from "../images/mahle.png";


 const Brands = () => {
    return (
			<Container>
				<Row>
					<Col xs={6} md={2}>
						<Image src={pic1} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic2} roundedCircle />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic3} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic4} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic5} roundedCircle />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic6} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic7} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic8} roundedCircle />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic9} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic10} thumbnail />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic11} roundedCircle />
					</Col>
					<Col xs={6} md={2}>
						<Image src={pic12} thumbnail />
					</Col>
				</Row>
			</Container>
		);
}
export default Brands
