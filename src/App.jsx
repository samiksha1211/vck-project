import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import CoursesPage from "./pages/CoursesPage"
import AdmissionPage from "./pages/AdmissonPage"
import './styles/Pages.css'
 import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    <div>

    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="samiksha kharade"
          studentPhotoUrl="/Images/samikash.jpg"photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
  
  
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about"element={<AboutPage/>}/>
        <Route path="/contact"element={<ContactPage/>}/>
        <Route path="/courses"element={<CoursesPage/>}/>
        <Route path="/admissions"element={<AdmissionPage/>}/>
     </Routes>
        <ChatbotComponent/>
  
        </Router>

    <Footer/>
    </div>
  )
}



export default App;
