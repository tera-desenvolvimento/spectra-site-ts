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
                    <a href="#solutions">Portfólio</a>
                </li>
                <li className="menu-item">
                    <a href="https://www.instagram.com/spectrabr/" target='_blank'>Instagram</a>
                </li>
                <li className="menu-item">
                    <a href="#solutions">Serviços</a>
                </li>
                <li className="menu-item">
                    <a href="https://wa.me/+558233115350" target='_blank'>Contato</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
