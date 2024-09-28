import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer/Footer";
import Header from "./What-Do-We-Do/Header";
import Main_Code from "./What-Do-We-Do/Main_Code";
import Footer_What_Do_We_Do from "./What-Do-We-Do/Footer_What_DO_We_Do";
function Landing (){
    return (
<>
<div className="pt-4 pl-4 pr-4">
    <Navbar/>

   </div>
   {/* What do we do Section */}
   <Header/>
   <Main_Code/>
    <Footer_What_Do_We_Do/>

   <Footer/>
   </>
    )
}
export default Landing;