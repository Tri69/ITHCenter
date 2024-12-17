import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import '../assets/Styles/Globa1l.css';

const Layout = ({ children }) => {
    return (
        <>
         
                <Navbar />
            
           
                {children}
           
                <Footer />
            
        </>
    )
}
export default Layout;