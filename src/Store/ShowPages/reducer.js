import { SHOW__PRODUCT, UNSHOW__PRODUCT } from "./type";

const initialState = {
	showProductPage: false,
	productData: {}
};

export const showProduct = (state = initialState, action) => {
	switch (action.type) {
		case SHOW__PRODUCT: {
			return { showProductPage: action.isTrue, productData: action.productToShow };
		}
		case UNSHOW__PRODUCT: {
			return { showProductPage: action.isTrue };
		}
		default:
			return state;
	}
};
