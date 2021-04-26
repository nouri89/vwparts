import React from 'react'
import "./Footer.css"
import pic1 from "../images/shopPhoto.jpeg"
import pic2 from "../images/shopmap.png";


 const Footer = () => {
    return (
			<div className="footer" >
				<div className="footerImages">
					<img src={pic1} alt="front shop entrance" />

					<img src={pic2} alt=" shop map" />
				</div>
				<div>
					<h4>
						<span>&#169;</span> Copy right reserved - for all your web solutions
						contact nouri89@hotmail.com
					</h4>
				</div>
			</div>
		);
}
export default Footer;

