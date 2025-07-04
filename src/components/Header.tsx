import logoSpectra from '../img/logo-spectra.svg';

import '../style/header.css';

function Header() {
  return (
    <header className="header-container">
        <div className="logo-wrapper">
            <img src={logoSpectra} alt="Spectra Logo" />
        </div>
        <nav className="menu-wrapper">
            <ul className="menu-list">
                <li className="menu-item home">
                    <a href="#home">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#about">Quem somos</a>
                </li>
                <li className="menu-item">
                    <a href="#portfolio">Portfólio</a>
                </li>
                <li className="menu-item">
                    <a href="#instagram">Instagram</a>
                </li>
                <li className="menu-item">
                    <a href="#services">Serviços</a>
                </li>
                <li className="menu-item">
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
