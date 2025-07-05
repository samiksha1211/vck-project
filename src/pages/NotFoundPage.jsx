import { Link} from "react-router-dom";
const NotFoundPage=() =>{
    return(
        <div
        className="page-container"
        style={{
            textAlign:"center",
            minHeight:"calc(100vh-200px)",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}
        >
        <h1>404 - Page Not Found</h1>
        <p>Ooop!The page you're lokking for doesn't exist.</p>
        <p>
            You might want to return to the{""}
            <Link to="/" className="btn">
            HomePage
            </Link>
            .
            </p>
            
            </div>
    );
};
export default NotFoundPage;

