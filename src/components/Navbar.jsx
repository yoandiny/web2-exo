import Logo from '../assets/hei-logo.png'
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav>
        <img className='hei-logo' src={Logo} alt="HEI Logo" />
        <ul className='navbar'>
            <li><a href="#home">ACCUEIL</a></li>
            <li><a href="#news">ACTUALITES</a></li>
            <li><a href="#bourse">BOURSES D'ETUDES</a></li>
            <li><a href="#registration">INSCRIPTION </a></li>
            <li className='navbar-intranet'><a href="#">INTRANET </a></li>
        </ul>
        </nav>
    );
};