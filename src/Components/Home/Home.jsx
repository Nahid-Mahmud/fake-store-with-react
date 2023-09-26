import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
    <Helmet>
      <title>Fake Store - Home</title>
    </Helmet>
      <Header></Header>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  );
};

export default Home;
