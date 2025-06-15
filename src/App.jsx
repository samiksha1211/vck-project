import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";

const App = () => {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about"element={<AboutPage/>}/>
        <Route path="/contact"element={<ContactPage/>}/>
        <Route path="/courses"element={<CoursesPage/>}/>
     </Routes>
    </Router>
    </>
  )
}
export default App;
