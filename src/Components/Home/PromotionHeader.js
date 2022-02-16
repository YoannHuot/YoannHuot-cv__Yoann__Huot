import React from "react";

import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import classe from "./Home.module.css";
import { useMediaQuery } from "react-responsive";

const PromotionHeader = () => {
	const handleShopfolio = useMediaQuery({
		query: "(min-width: 769px)"
	});
	const promotion = [
		"-0% sur votre premier achat",
		"Mail : Yoann.huot@gmail.com",
		"Horaires : Lun - Ve : 9h30-18h30",
		"Frais de port gratuit",
		"Téléphone : 06.13.63.97.57"
	];

	return (
		<>
			{handleShopfolio && (
				<div className={classe.home__promotion}>
					<div className={classe.home__promotion__content}>
						<Carousel
							showIndicators={false}
							showArrows={true}
							showThumbs={false}
							showStatus={false}
							className={classe.carousel_promo}
							autoPlay={true}
							interval="3000"
							infiniteLoop={true}
						>
							{promotion.map((promotion, index) => (
								<div className={classe.promotion__carousel__content} key={index}>
									{promotion}
								</div>
							))}
						</Carousel>
					</div>
				</div>
			)}
		</>
	);
};

export default PromotionHeader;
