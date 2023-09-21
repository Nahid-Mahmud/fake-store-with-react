import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <Header></Header>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
};

export default Home;
