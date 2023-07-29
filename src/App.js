import NavBar from "./scenes/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [selectedPage, setSelectedPage] = useState("home") // this will determine what part of the navigation on the wesite we are yet!
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
