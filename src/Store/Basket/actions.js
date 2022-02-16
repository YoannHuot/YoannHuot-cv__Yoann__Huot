import {
    INCREMENT__PRODUCT,
    DICREMENT__PRODUCT,
    DELETE__PRODUCT
} from "./type";

export const incrementProduct = (data) => {
    return {
        type: INCREMENT__PRODUCT,
        product: data
    };
};
export const dicrementProduct = (data) => {
    return {
        type: DICREMENT__PRODUCT,
        product: data
    };
};
export const deleteProduct = (data) => {
    return {
        type: DELETE__PRODUCT,
        product: data
    };
};
