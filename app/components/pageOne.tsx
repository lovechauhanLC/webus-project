import CaseStudies from "./caseStudies";
import Clients from "./clients";
import Impact from "./impact";
import Navbar from "./navbar";
import ProjectIntro from "./projectIntro";

export default function PageOne(){
    return(
        <>
            <Navbar/>
            <ProjectIntro/>
            <CaseStudies/>
            <Impact/>
            <Clients/>
        </>
    );
}
