  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Navbar from "./pages/navbar"; // Import Navbar component
  import Login from "./pages/login"; // Import Login page
  import SignUp from "./pages/signup"; // Import SignUp page
  import Footer from "./pages/footer"; // Import Footer component
  import Landing from "./pages/landing"; // import landing page
  import Feedback from "./pages/feedback"; // import feedback page
  import Appointment from "./pages/appointment"; // import appointment page
  import Confirmation from "./pages/confirmation"; // import confirmation page
  import Booked from "./pages/booked"; // import booked page
  import AdminDashboard from "./pages/admin/AdminDashboard";
  import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute component
  import { AuthProvider } from "./auth/authContext"; // Import AuthProvider component


  const App: React.FC = () => {
    return (
      <AuthProvider>
        <Router>
          <div>
            {/* Navbar is always displayed */}
            <Navbar />

          {/* Routing */}
          <Routes>
            {/* Set the landing page to be the default (root) page */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/booked" element={<Booked />} />
            <Route path="/admin" element={<AdminDashboard />} />
  \        </Routes>

            {/* Footer is always displayed */}
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    );  
  };

  export default App;
