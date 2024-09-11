import Cards from "./cards";
import CaseStudies from "./caseStudies";
import Clients from "./clients";
import Footer from "./footer";
import Impact from "./impact";
import Intro from "./intro";
import Navbar from "./Navbar";
import ProjectIntro from "./projectIntro";
import RightCoreMain from "./RightCoreMain";
import Home from "./subMain";

export default function PageOne(){
    return(
        <>
            <Home/>
            <ProjectIntro/>
            <CaseStudies/>
            <Impact/>
            <Clients/>
            <Footer/>
        </>
    );
}
