import React, { useState, useEffect } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiTeamFill, RiShoppingBagFill } from "react-icons/ri";
import classe from "./BurgerMenu.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useIncrement from "../../Store/Basket/hooks";

const BurgerMenu = (props) => {
	const navigate = useNavigate();
	const increment = useIncrement();
	const incrementStore = increment.productStore.product;
	const [basketCount, setBasketCount] = useState(0);

	const goToBasket = () => {
		navigate("/panier");
	};
	const goToAbout = () => {
		navigate("/about");
	};
	const goToContact = () => {
		navigate("/contact");
	};

	const [showMenu, setShowMenu] = useState(false);

	const handleMenu = () => {
		if (showMenu) {
			setShowMenu(false);
		} else {
			setShowMenu(true);
		}
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
		<div className={classe.container__burger__menu}>
			<img
				src={logo}
				alt="logo"
				className={classe.logo__burger__menu}></img>
			{!showMenu && <IoIosMenu fontSize="2em" onClick={handleMenu} />}
			{showMenu && (
				<div className={classe.burger__menu}>
					<IoIosClose
						fontSize="1.5em"
						onClick={handleMenu}
						className={classe.close__menu}
					/>
					<div className={classe.burger__menu__content}>
						<div className={classe.menu__card} onClick={goToBasket}>
							<span>
								<RiShoppingBagFill />
							</span>

							<p>Panier ({basketCount})</p>
						</div>
						<div
							className={classe.menu__card}
							onClick={goToContact}>
							<span>
								<MdEmail />
							</span>
							<p>Contact</p>
						</div>
						<div className={classe.menu__card} onClick={goToAbout}>
							<span>
								<RiTeamFill />
							</span>

							<p>L'équipe</p>
						</div>
					</div>
				</div>
			)}
			{!showMenu && <div></div>}
		</div>
	);
};

export default BurgerMenu;
