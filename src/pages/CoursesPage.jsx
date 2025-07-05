import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const CoursesPage = () => {
    return(
        <div>
                 <Header/>
        <div className="main-container">
            
            <div className="page-container"style={{overflow:"auto"}}>
        
            <h1>Our Academic Programs </h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
        <h2>Discover Campus Life</h2>
        <video width="1000" height="500" controls>
  <source src="https://vck-ojt.vercel.app/assets/college-tour-FAmcnyfF.mp4" type="video/mp4"></source>
  </video><hr/>
  <h2>Undergraduate Programs (UG)</h2>
  <li><b>Bachelor of Science (B.Sc.)</b></li>
  <ul>
    <li>Computer Science (3 years)</li>
    <li>Information Technology (3 years)</li>
    <li>Biotechnology (3 years)</li>
  </ul>
  <h2>Postgraduate Programs (PG)</h2>
  <li><b>Master of Science (M.Sc.)</b></li>
  <ul>
    <li>Computer Science (2 years)</li>
    <li>Information Technology (2 years)</li>
  </ul>
  <li><b>Master of Commerce (M.Com) (2 years)</b></li>
  <li><b>Master of Arts (M.A.) (2 years)</b></li>
  <h2>Program Details & Fee Structure (Annual)</h2><hr/>
  <table border={"1"}>
    <thead>
        <tr>
           <th>Program Type</th>
           <th>Course Name</th>
           <th>Duration</th>
           <th>Annual Fee(INR)</th>
           <th>Eligibility</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science</td>
            <td>3 Year</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
        </tr>
        <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
        </tr>
     </tbody>
  </table><hr/>
  <h2>Specialized & Vocational Courses</h2>
  <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
  <div className="call-to-action">
       <p>Have questions about a specific course?</p>
            
       <Link to="/contact" className="nav-item btn primary-btn">Inqurie About Courses</Link>
       </div>
       </div>
       </div>

        </div>
    )
}
export default CoursesPage;