import { Link } from "react-router-dom";
import Header from "../components/Header/Header";


const HomePage= () =>{
    return(
        <div className="main-container">
            <div>
                 <Header/>
            <div className="page-container"style={{overflow:"auto"}}>
           
            <div className="hero1" style={{color:"white"}} >
                <img src="\Images\college-banner.png"
                alt="Vivekanand College banner"
                className="hero-banner-image"
                />
                <div className="hero-overlay-text">
            <h1>Welcome To Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <Link to="/admission" className="btn btn-outline-success"><button>Apply Now </button></Link>
            </div>
            </div>
        
            <p><b>Vivekanand College </b>is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.t</p>
            <h2>Why Choose Vivekanand College?</h2>
            <ul>
                <li><b>Legacy of Excellence</b>: Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty</b>: Learn from renowned experts and passionate educators.</li>
                <li><b>Experienced Faculty</b>: Learn from renowned experts and passionate educators.</li>
                <li><b>Holistic Development</b>: Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements</b>: Excellent career opportunities with leading companies.</li>
            </ul>
            <h2>Campus Life & Facilities</h2>
            <img src="https://www.vivekanandcollege.ac.in/uploads/home/WhatsApp%20Image%202025-05-15%20at%2010.31.26%20AM.jpeg" width={"500"}/>
            <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" width={"700"}/>
            <h6>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</h6>
            <h5>Ready to explore our courses?</h5>
              <Link to="/courses" ><button className="nav-item btn primary-btn" >Explore Courses</button></Link>
        
                        
                        </div>
                </div>
        </div>
    )

}
export default HomePage;


