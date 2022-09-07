import React from "react";
import Header from "../components/Header";
import ProductList from "../containers/ProductList";
import AdministratorForm from "../components/AdministratorForm";
const Home = () => {
    return (
        <>
        <Header></Header>
            <AdministratorForm />
        </>
    );
}

export default Home;