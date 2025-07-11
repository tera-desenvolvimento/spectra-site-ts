import React from 'react';
import logoSpectra from '../img/logo-spectra.svg';
import menuIcon from '../img/menu-icon.svg';

import '../style/header.css';

import isMobileDevice from "../controllers/checkMobile.controller";

function toggleMobileMenu() {
    let navElement = document.getElementById("navContainerMob");
    navElement?.classList.toggle("active");
}

function Header() {
    if (!isMobileDevice()) {
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
    } else {
        return (
            <React.Fragment>
                <header className="header-container-mob">
                        <img src={logoSpectra} className="logo-header-mob" />
                        <button id="toggleMenu" onClick={toggleMobileMenu}>
                            <img src={menuIcon} />
                        </button>
                </header>
                <div className="nav-container-mob" id="navContainerMob">
                    <nav className="nav-element-mob">
                        <ul className="menu-list-mob">
                            <li className="nav-item">
                            <a href="#" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                Quem Somos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#solutions" className="nav-link">
                                Portfólio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/spectrabr/" target='_blank' className="nav-link">
                                Instagram
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://wa.me/+558233115350" target='_blank' className="nav-link">
                                Contato
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
