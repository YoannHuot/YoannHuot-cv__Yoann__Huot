import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Basket from "./Components/Basket/Basket";
import Contact from "./Components/Contact/Contact";
import Product from "./Components/Product/Product";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store, persistor } from "./Store/productStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/panier" element={<Basket />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route
                            exact
                            path="/product/:id"
                            element={<Product />}
                        />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
