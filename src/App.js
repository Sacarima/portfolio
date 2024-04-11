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
import SocialMediaIcons from "./components/SocialMediaIcons";
import MouseEffectComponent from "./components/MouseEffectComponent";

function App() {
  const [selectedPage, setSelectedPage] = useState("home") // this will determine what part of the navigation on the wesite we are yet!
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setItopOfPage] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  {/* Mouse effect */}
  const handleMouseMove = (e) => {
    setPosition({
        x: e.clientX,
        y: e.clientY
    })
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)

  }, [])


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
    <div 
      className="app min-h-screen"
      style={{
        height: '100vh',
        position: 'relative',
      
      }}
      >
      <div>
        
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
      </div>
    
  );
}

export default App;
