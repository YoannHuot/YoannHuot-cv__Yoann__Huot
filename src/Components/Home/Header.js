import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
import classe from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiTeamFill, RiShoppingBagFill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import useIncrement from "../../Store/Basket/hooks";

const Header = () => {
	const navigate = useNavigate();
	const increment = useIncrement();

	const incrementStore = increment.productStore.product;

	const [basketCount, setBasketCount] = useState(0);

	const handleShopfolio = useMediaQuery({
		query: "(min-width: 769px)"
	});

	const goToBasket = (e) => {
		navigate("/panier");
	};
	const goToAbout = () => {
		navigate("/about");
	};
	const goToContact = () => {
		navigate("/contact");
	};
	const backToHome = () => {
		navigate("/");
	};

	useEffect(() => {
		if (incrementStore.length === 0) {
			setBasketCount(0);
		} else if (incrementStore.length > 0) {
			const mapStore = incrementStore.map((items) => {
				return items.number;
			});
			const sum = mapStore.reduce((x, y) => x + y);
			setBasketCount(sum);
		}
	}, [increment]);

	return (
		<div className={classe.header__home}>
			{handleShopfolio ? (
				<>
					<div className={classe.header__home__logo}>
						<img src={logo} onClick={backToHome}></img>
						{handleShopfolio && <h1>Yoann Huot Shopfolio</h1>}
					</div>
					<div className={classe.header__home__content}>
						<div
							className={classe.header__home__content__picto}
							onClick={goToBasket}>
							<span>
								<RiShoppingBagFill />
							</span>
							<p>Panier ({basketCount})</p>
						</div>
						<div
							className={classe.header__home__content__picto}
							onClick={goToAbout}>
							<span>
								<RiTeamFill />
							</span>
							<p>Old CV</p>
						</div>
						<div
							className={classe.header__home__content__picto}
							onClick={goToContact}>
							<span>
								<MdEmail />
							</span>

							<p>Contact</p>
						</div>
					</div>
				</>
			) : (
				<BurgerMenu panier={increment.productStore.counter} />
			)}
		</div>
	);
};

export default Header;
