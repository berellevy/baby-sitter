import FindSitterMenu from "../components/FindSitterMenu";
import Header from "../components/Header";
import img from "../assets/grass_kid_faded.jpeg";

const Home = () => {
  return (
    <>
      <div id="home-bg">
        <img src={img} alt="" />
      </div>
      <div class="opaque"></div>
      <div className="container">
        <Header classes="background-blur" />
        <h1 className="home-message">
          Find <br />a Sitter
        </h1>

        <FindSitterMenu />
      </div>
    </>
  );
};

export default Home;
