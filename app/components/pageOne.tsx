import Cards from "./cards";
import CaseStudies from "./caseStudies";
import Clients from "./clients";
import Footer from "./footer";
import Impact from "./impact";
import Navbar from "./navbar";
import ProjectIntro from "./projectIntro";

export default function PageOne(){
    return(
        <>
            <Navbar/>
            <Cards/>
            <ProjectIntro/>
            <CaseStudies/>
            <Impact/>
            <Clients/>
            <Footer/>
        </>
    );
}
