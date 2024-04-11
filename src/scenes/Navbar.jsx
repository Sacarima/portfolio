import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-Green" : ""} hover:text-Green transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-[darkslategray] shadow-md"
    const ResumeLink = (
        <a
            href="/resumee.pdf"
            target="_blank"
            rel="noopener noreferrer "
            className=" rounded-md border-Green p-2 border border-solid text-Green"
        >
            Resume
        </a>
    );  

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 `}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                {/* <h4 className="font-playfair text-3xl font-bold">J.A</h4> */}
                
                    <a href="/"><img src="assets/logo.png" alt="logo" className=" w-16"/></a>

                {/* DESKTOP NAVIGATION */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                      <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />
                      <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />  
                      <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />

                      <div>
                        {ResumeLink}
                      </div>
                    </div>
                ) : (
                    <button
                        className="rounded-lg border-4 border-Green p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src="../assets/menu-icon.svg" alt="Menu" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-[#000000ea] w-full">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src="../assets/close-icon.svg" alt="close-icon" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2lx text-white">
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />  
                            <Link 
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />  
                            
                            <Link 
                                page="Resume"
                                className="rounded-full border-blue p-2 border border-solid"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            /> 
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar