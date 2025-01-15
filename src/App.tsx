import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar"; // Import Navbar component
import Login from "./pages/login"; // Import Login page
import SignUp from "./pages/signup"; // Import SignUp page
import Footer from "./pages/footer"; // Import Footer component

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navbar is always displayed */}
        <Navbar />

        {/* Routing */}
        <Routes>
          {/* Set the login page to be the default (root) page */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* You can add other routes here if needed */}
        </Routes>

        {/* Footer is always displayed */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
