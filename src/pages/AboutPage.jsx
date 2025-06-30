import Header from "../components/Header/Header";

const AboutPage =() =>{
    return(
        <div className="main-container">
            <div>
                 <Header/>
            <div className="page-container"style={{overflow:"auto"}}>
        
            <h1>About Vivekanand College</h1>
            <p>Vivekanand college stands as beacon of knowledge and integrity, committed to delivering tranformative education since its inception in [year of Eatablishment,e.g 1980]our collge has conistently strived to uphold the higest standards of academic rigor and ethical values.</p><hr/>
            <h2>Our Mission </h2>
            <ul>
                <li>To provide the high quality accessible education accross various diciplane</li>
                <li>To foster research,innovation,andcreativity among students and faculty</li>
                <li>To cultiva a diverse and inclusive learning enviroment.</li>
                <li>To i still strong ethical values and leadership qualities.</li>
            </ul><hr/>
            <h2>Our Values</h2>
            <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p><hr/>
            <h2>Our History</h2>
            <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
            </div>
         </div>
        </div>
    )
}

export default AboutPage;