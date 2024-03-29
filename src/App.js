import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import products from "./components/sofaProducts.jsx/SofaData";
import Contact from "./components/contact/Contact";
import ShopPro from "./components/shopPage/ShopPro";
import ShopDetails from "./components/shopDetails/ShopDetails";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const { dataOfSofa } = products;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
        <Header CartItem={CartItem} />
      <Routes>
        <Route
          path="/"
          element={
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
              dataOfSofa={dataOfSofa}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<ShopPro />}></Route>
        <Route path="/shop/:id" element={<ShopDetails />} />

      </Routes>
        <Footer />
    </>
  );
}

export default App;
