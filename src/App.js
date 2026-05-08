import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import './App.css'
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";

function App() {

  return (

    <div className="bg-primary-dark">
      <NavBar />
      <Routes>
        <Route path="/AboveLogixLLCWeb/Home" element={<Home />} />
        <Route path="AboveLogixLLCWeb/portfolio" element={<Portfolio />} />
        <Route path="AboveLogixLLCWeb/pricing" element={<Pricing />} />
        <Route path="AboveLogixLLCWeb/FAQ" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>


  )

}

export default App;
