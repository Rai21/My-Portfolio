import { FaLinkedin } from "react-icons/fa"
import logo from "../assets/SD_logo.webp"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-1" width={40} height={33} alt="logo"/>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="linkedin.com/in/sneha-debnath-6017931b3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
              <FaLinkedin />
            </a>
        <a href="linkedin.com/in/sneha-debnath-6017931b3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
              <FaLinkedin />
            </a>
        <a href="linkedin.com/in/sneha-debnath-6017931b3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
              <FaLinkedin />
            </a>
        <a href="linkedin.com/in/sneha-debnath-6017931b3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
              <FaLinkedin />
            </a>
      </div>
    </nav>
  )
}

export default Navbar