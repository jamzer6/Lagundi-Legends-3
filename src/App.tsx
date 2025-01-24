import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/navbar"; // Import Navbar component
import Login from "./pages/login"; // Import Login page
import SignUp from "./pages/signup"; // Import SignUp page
import Footer from "./pages/footer"; // Import Footer component
import Landing from "./pages/landing"; // import landing page
import Feedback from "./pages/feedback"; // import feedback page
import Appointment from "./pages/appointment"; // import appointment page
import Confirmation from "./pages/confirmation"; // import confirmation page
import Booked from "./pages/booked"; // import booked page
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute component
import { AuthProvider } from "./auth/authContext"; // Import AuthProvider component

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <MainLayout />
      </Router>
    </AuthProvider>
  );
};

// Separate layout to manage conditional rendering
const MainLayout: React.FC = () => {
  const location = useLocation();

  // List of paths where the Navbar should not be shown
  const noNavbarRoutes = ["/booked",];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/booked" element={<Booked />} />
      </Routes>

      {/* Footer is always displayed */}
      <Footer />
    </div>
  );
};

export default App;
