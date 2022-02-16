import { SHOW__PRODUCT, UNSHOW__PRODUCT } from "./type";

export const showproduct = (data) => {
	return {
		type: SHOW__PRODUCT,
		isTrue: data.isTrue,
		productToShow: data.productData
	};
};
export const unshowproduct = (data) => {
	return {
		type: UNSHOW__PRODUCT,
		isTrue: data
	};
};
