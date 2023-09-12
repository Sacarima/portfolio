import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import MySkills from "./scenes/MySkills";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import lineGradient from "./components/LineGradient";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home") // this will determine what part of the navigation on the wesite we are yet!
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setItopOfPage] = useState(true);

  {/* sticky background-color on scroll */}
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setItopOfPage(true);
      if (window.scrollY !== 0) setItopOfPage(false); 
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   }, [])
   {/**************************** */}

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
        isTopOfPage={isTopOfPage}
        />
        {/* Dot group side menu scroll */}
        <div className="w-5/6 mx-auto md:h-full">
            {isAboveMediumScreens && (
              <DotGroup 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            )}
            <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
              <MySkills />
        </div>
        <LineGradient /> 
        <div className="w-5/6 mx-auto">
              <Projects />
        </div>
        <LineGradient /> 
        <div className="w-5/6 mx-auto">
              <Contact />
        </div>
        <Footer />
    </div>
  );
}

export default App;
