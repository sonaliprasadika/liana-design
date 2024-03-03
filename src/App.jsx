import "./App.css";
import Company from "./components/Company";
import Footer from "./components/Footer";
import GreenBar from "./components/GreenBar";
import { HeaderImage } from "./components/HeaderImage";
import LatestNews from "./components/LatestNews";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";
import Reference from "./components/Reference";

function App() {
  return (
    <>
      <GreenBar />
      <NavBar />
      <HeaderImage />
      <Company />
      <LatestNews />
      <Reference />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
