import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer/Footer";
import Intro from "./Components/Intro";
import OurProduct from "./Components/OurProduct";
import AboutMed from "./Components/AboutMed";
import MedEcosystem from "./Components/MedEcosystem";
import Vitals from "./Components/Vitals/Vitals";
import Form from "./Components/Form/Form";
import Header from "./Components/What-Do-We-Do/Header";
import Main_Code from "./Components/What-Do-We-Do/Main_Code";
import Foot_What from "./Components/What-Do-We-Do/Foot_What";

function Landing() {
  return (
    <div className="pt-4 pl-4 pr-4">
      <Navbar />
      <div >
      <Intro />
      </div>
     
      <OurProduct />
      <AboutMed />
      <MedEcosystem />
      <Vitals />
      <Header />
      <Main_Code />
      <Foot_What />

      <Form />



      <Footer />
    </div>
  );
}
export default Landing;
