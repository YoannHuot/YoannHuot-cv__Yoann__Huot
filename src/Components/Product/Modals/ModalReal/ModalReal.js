import React, { useState, useEffect } from "react";
import modulecss from "../Modal.module.css";
import CdpReal from "./CdpReal";
import DevReal from "./DevReal";
import NamingReal from "./NamingReal";
import classe from "./ModalReal.module.css";

const ModalReal = (props) => {
	const [defineProduct, setDefineProduct] = useState("");
	const currentProduct = props.currentProduct;
	useEffect(() => {
		if (currentProduct.title) {
			setDefineProduct(currentProduct.title);
		}
	}, [currentProduct.title]);

	const backToProduct = () => {
		props.productReal();
	};

	return (
		<div>
			<div className={modulecss.backdrop} onClick={backToProduct} />
			<div className={modulecss.modal}>
				{defineProduct === "Naming" && <NamingReal />}
				{defineProduct === "Project Manager" && <CdpReal />}
				{defineProduct === "Developpeur Web" && <DevReal />}

				<button onClick={backToProduct} className={classe.buttonBack}>
					Back to product
				</button>
			</div>
		</div>
	);
};

export default ModalReal;
