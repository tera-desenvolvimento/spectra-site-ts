import React from "react";

import mainIcon from "../img/main-icon.svg"
import fbIcon from "../img/fb-icon.svg";
import linkedinIcon from "../img/linkedin.svg";
import instaIcon from "../img/insta-icon.svg";
import ytIcon from "../img/yt-icon.svg";

import "../style/footer.css";

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer-container">
                <div className="left-wrapper">
                    <span className="footer-title">
                        Spectra Tecnologia
                    </span>

                    <nav className="menu-container">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#solutions" rel="noopener noreferrer">
                                    Soluções
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#about" rel="noopener noreferrer">
                                    Quem somos
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="https://wa.me/+558233115350" target="_blank" rel="noopener noreferrer">
                                    Contato
                                </a>
                            </li>
                        </ul>
                        <ul className="menu-list">
                            <li className="menu-item">
                                <a href="https://wa.me/+558233115350" target="_blank" rel="noopener noreferrer">
                                    Consultoria em Gestão Inteligente
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="https://wa.me/+558233115350" target="_blank" rel="noopener noreferrer">
                                    Contrato Online
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="https://wa.me/+558233115350" target="_blank" rel="noopener noreferrer">
                                    ZapKey
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="https://wa.me/+558233115350" target="_blank" rel="noopener noreferrer">
                                    Assistentes de IA
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <img src={mainIcon} className="logo-footer" />
                </div>
                <div className="right-wrapper">
                    <div className="newsletter-wrapper">
                        <span>Receba nossa newsletter</span>
                        <input type="email" name="newsEmail" id="newsEmail" placeholder="Email"/>
                        <button>Inscrever</button>
                    </div>
                    <div className="social-media">
                        <span>NOSSAS REDES SOCIAIS</span>
                        <div className="social-wrapper">
                            <a href="#" className="social-link">
                                <img src={fbIcon} className="social-icon" />
                            </a>
                            <a href="#" className="social-link">
                                <img src={linkedinIcon} className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/spectrabr/" target="_blank" className="social-link">
                                <img src={instaIcon} className="social-icon" />
                            </a>
                            <a href="#" className="social-link">
                                <img src={ytIcon} className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <span className="footer-span">
                © AF DE CARVALHO MARKETING - 28.614.744/0001-15 | Todos os direitos reservados
            </span>
        </React.Fragment>
    )
}

export default Footer;