import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Login from './pages/login';
import SignUp from './pages/signup';
import Footer from './pages/footer';
import Landing from './pages/landing';
import Feedback from './pages/feedback';
import Appointment from './pages/appointment';
import Confirmation from './pages/confirmation';
import Booked from './pages/booked';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './auth/authContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/booked" element={<Booked />} />
            {/* Protect admin routes */}
            <Route element={<AdminDashboard />}>
              <Route path="/admin" element={<AdminDashboard />} />
              {/* Additional nested admin routes can be added here */}
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
