import React, { useState, useEffect } from "react";
import CdpInfos from "./CdpInfos";
import DevInfos from "./DevInfos";
import modulecss from "../Modal.module.css";
import NamingInfos from "./NamingInfos";
import classe from "./ModalProduct.module.css";

const ModalProduct = (props) => {
	const currentProduct = props.currentProduct;
	const [defineProduct, setDefineProduct] = useState("");
	console.log(currentProduct.title);

	useEffect(() => {
		console.log(props);
		if (currentProduct.title) {
			setDefineProduct(currentProduct.title);
		}
	}, []);

	const backToProduct = () => {
		props.productInfos();
	};

	return (
		<>
			<div className={modulecss.backdrop} onClick={backToProduct} />
			<div className={modulecss.modal}>
				{defineProduct === "Naming" && <NamingInfos />}
				{defineProduct === "Project Manager" && <CdpInfos />}
				{defineProduct === "Developpeur Web" && <DevInfos />}

				<button onClick={backToProduct} className={classe.buttonBack}>
					Back to product
				</button>
			</div>
		</>
	);
};

export default ModalProduct;
