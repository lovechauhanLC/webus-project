import Cards from "./cards";
import CaseStudies from "./caseStudies";
import Clients from "./clients";
import Footer from "./footer";
import Impact from "./impact";
import Intro from "./intro";
import Navbar from "./Navbar";
import ProjectIntro from "./projectIntro";
import Expertise from "./expertise";


export default function PageOne(){
    return(
        <div className=" relative "> 
            <Navbar/>
            <Intro/>
            <Cards/>
            <Expertise/>
            <ProjectIntro/>
            <CaseStudies/>
            <Impact/>
            <Clients/>
            <Footer/>
        </div>
    );
}
