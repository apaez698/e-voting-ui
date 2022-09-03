import React from "react";
import Header from "../components/Header";
import ProductList from "../containers/ProductList";

const Home = () => {
    return (
        <>
        <Header></Header>
            <ProductList />
        </>
    );
}

export default Home;