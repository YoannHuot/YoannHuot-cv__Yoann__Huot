import { useDispatch, useSelector } from "react-redux";
import { showproduct, unshowproduct } from "./actions";

const useShowProduct = () => {
    const dispatch = useDispatch();
    const navigateStore = useSelector((state) => state.persistedReducerShow);

    const showProducts = (data) => {
        dispatch(showproduct(data));
    };
    const unShowProducts = (data) => {
        dispatch(unshowproduct(data));
    };

    return {
        navigateStore,
        showProducts,
        unShowProducts
    };
};

export default useShowProduct;
