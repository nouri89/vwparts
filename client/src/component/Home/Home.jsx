//import React, { useEffect, useState }from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import pic1 from "../images/bulkofparts1.jpg";
import pic2 from "../images/bulkofparts2.jpg";
import pic3 from "../images/servicing.jpg";
/*
const [allParts, setAllParts] = useState([]);

async function showAllParts() {

	const resultes = await fetch("/allparts");
	const parsResultes = await resultes.json();
	setAllParts(parsResultes);
	console.log(allParts);
}
	useEffect(()=>{showAllParts()},[]);

*/

const Home = () => {
	return (
		<div>
			<CardDeck>
				<Card>
					<Card.Img variant="top" src={pic1} />
					<Card.Body>
						<Card.Title>genuine parts with unbeatable prices</Card.Title>
						<Card.Text>
							Our exprtise exceed 40 years in the Mechanics field . On top of
							garenteed quality we will provide with the best advice for the
							maintenance of your vehicule.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={pic2} />
					<Card.Body>
						<Card.Title>قطع غيار أصلية بأسعار تنافسية</Card.Title>
						<Card.Text dir="rtl">
							تتجاوز خبرتنا 40 عامًا في مجال الميكانيكا. علاوة على الجودة
							الممنوحة ، سنقدم أفضل النصائح لصيانة سيارتك
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={pic3} />
					<Card.Body>
						<Card.Title>pièces d'origine à des prix compétitifs</Card.Title>
						<Card.Text>
							Notre expérience dépasse 40 ans dans le domaine de la mécanique.
							Au dessus de qualité garantie, nous vous fournirons les meilleurs
							conseils pour la entretien de votre véhicule.
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	);
};

export default Home;

//<img src={pic} alt="under construction" />
