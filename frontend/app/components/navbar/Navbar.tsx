import Image from "next/image";
import "./Navbar.css"
import Logo from '../../images/unnamed.png';

const Navbar = () => {
  return (
    <header>
    <Image className="logo" src= {Logo} alt={""}></Image>
     <nav id="navbar">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <a href="#">Login</a>
      <a href="#">Signup</a>
    </nav>
  </header>
  )
}

export default Navbar;