import { useDispatch, useSelector } from "react-redux";
import { incrementProduct, dicrementProduct, deleteProduct } from "./actions";

const useIncrementProducts = () => {
    const dispatch = useDispatch();
    const productStore = useSelector(
        (state) => state.persistedReducerIncrement
    );

    const incrementProducts = (data) => {
        dispatch(incrementProduct(data));
    };
    const dicrementProducts = (data) => {
        dispatch(dicrementProduct(data));
    };
    const deleteProducts = (data) => {
        dispatch(deleteProduct(data));
    };

    return {
        productStore,
        incrementProducts,
        deleteProducts,
        dicrementProducts
    };
};

export default useIncrementProducts;
