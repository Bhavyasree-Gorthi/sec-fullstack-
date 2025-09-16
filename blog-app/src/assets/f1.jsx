import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from './pages/Login';
import SignUp from './pages/Signup';  // fixed import to match file name Signup.jsx

function F1() {
    return (
        <BrowserRouter>
            <nav style={{ padding: '10px', backgroundColor: '#3949ab' }}>
                <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
                <Link to="/about" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>About</Link>
                <Link to="/contact" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Contact</Link>
                <Link to="/login" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
                <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Sign Up</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default F1;
