import useMediaQuery from "../hooks/useMediaQuery"

const SocialMediaIcons = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

    return ( isAboveMediumScreens && (
        <div className="flex flex-col gap-6 fixed top-[58%] left-7" >
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/joao-sacarima-aleixo-a3aa32253/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/SacarimaAleixo"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/twitter.png" alt="twitter-link" />
            </a>
            {/* <a 
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/joao-sacarima-aleixo-a3aa32253/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/facebook.png" alt="facebook-link" />
            </a> */}
            <a 
                className="hover:opacity-50 transition duration-500 "
                href="https://www.linkedin.com/in/joao-sacarima-aleixo-a3aa32253/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/instagram.png" alt="Instagram-link" />
            </a>
        </div>
    )
)}



export default SocialMediaIcons