 import Header from "../components/Header/Header";

const ContactPage = () =>{
    return(
         <div>
                 <Header/>
        <div className="main-container">
           
            <div className="page-container"style={{overflow:"auto"}}>
    
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help</p>
                <h2>General Enquirie</h2>
                <p><b>Vivekanand College Main Campus</b>
[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India

<b>Phone:</b> +91 12345 67890<br/>
Email: info@vivekanandcollege.edu<br/>
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br/></p>
<hr/>
<h2><b>Admissions Office</b></h2>
<p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
Phone: +91 98765 43210<br/>
Email: admissions@vivekanandcollege.edu<br/></p><hr/>
<h2><b>Student Support Services</b></h2>
<p>For current student support, academic advising, or general assistance:<br/>
Phone: +91 87654 32109<br/>
Email: studentsupport@vivekanandcollege.edu<br/></p><hr/>
<h2>Find Us on the Map</h2>
<a href="https://maps.google.com/?q=Vivekanand+College"> view on google map</a><hr/>
<h2>Send Us a Message</h2>
<p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
     </div>
     </div>

</div>
    )

}
export default ContactPage;