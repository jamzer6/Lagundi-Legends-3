import React from "react";
import Navbar from "./pages/navbar"; // Import Navbar component
import Login from "./pages/login"; // Import Login component
import Footer from "./pages/footer";
import Signup from "./pages/signup";


const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Login Component */}
      <Login />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
