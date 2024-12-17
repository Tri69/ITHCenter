import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const RouterPage = ()=> {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default RouterPage;