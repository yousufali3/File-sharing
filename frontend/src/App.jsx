import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/upload" element={<Sidebar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
