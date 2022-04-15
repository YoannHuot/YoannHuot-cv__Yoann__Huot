import {
	INCREMENT__PRODUCT,
	DICREMENT__PRODUCT,
	DELETE__PRODUCT
} from "./type";

const initialState = {
	product: []
};

export const incrementProduct = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT__PRODUCT: {
			const productFilter = state.product.filter(
				(param) => param.id == action.product.id
			);
			if (productFilter.length === 0) {
				return {
					...state,
					product: [
						...state.product,
						{
							...action.product,
							number: 1
						}
					]
				};
			} else if (productFilter.length > 0) {
				const currentProduct = productFilter[0];

				const index = state.product.indexOf(currentProduct);
				const newProduct = [...state.product];

				newProduct[index].number++;
				newProduct[index].img = action.product.img;

				return {
					...state,
					product: newProduct
				};
			}
		}

		case DICREMENT__PRODUCT: {
			const productFilter = state.product.filter(
				(param) => param.id == action.product.id
			);
			const currentProduct = productFilter[0];
			if (productFilter.length > 0) {
				if (currentProduct.number > 1) {
					const index = state.product.indexOf(currentProduct);
					const newProduct = [...state.product];

					newProduct[index].number--;
					return {
						...state,
						product: newProduct
					};
				} else if (currentProduct.number === 1) {
					const index = state.product.indexOf(currentProduct);
					state.product.splice(index, 1);
					return {
						...state,
						product: state.product
					};
				}
			}
		}

		case DELETE__PRODUCT: {
			const productFilter = state.product.filter(
				(param) => param.id == action.product.id
			);
			const currentProduct = productFilter[0];
			const indexCurrentProductInState =
				state.product.indexOf(currentProduct);

			state.product.splice(indexCurrentProductInState, 1);

			return {
				...state,
				product: state.product
			};
		}
		default:
			return state;
	}
};
