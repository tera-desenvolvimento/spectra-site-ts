import asteriskImg from "../img/asterisk-2.svg";
import fbIcon from "../img/fb-icon.svg";
import linkedinIcon from "../img/linkedin.svg";
import instaIcon from "../img/insta-icon.svg";
import ytIcon from "../img/yt-icon.svg";

import "../style/contactUs.css";

function ContactUs() {
    return (
        <div className="contact-container">
            <div className="main-wrapper">
                <span className="main-title">E aí? Vai perder tempo?</span>

                <div className="separator">
                    <span>Entre em contato e fale com o nosso time!</span>
                    <a href="https://wa.me/+558233115350" target="_blank" rel="noopener noreferrer">Enviar mensagem</a>
                </div>
            </div>
            <img src={asteriskImg} className="asterisk-bg" />
            <div className="contact-wrapper">
                <div className="left-wrapper">
                    <b>Estamos aqui para conectar e ajudar você!</b>
                    <span>Tem dúvidas sobre contato? Precisa de ajuda com alguma dúvida específica? Nossa equipe está pronta para ajudar.</span>

                    <div className="aligner">
                        <div>
                            <b>CONTATO</b>
                            <span>82 99118-5298</span>
                        </div>
                        <div>
                            <b>EMAIL</b>
                            <span>contato@spectra.tec.br</span>
                        </div>
                    </div>

                    <b>Siga a Spectra</b>
                    <div className="social-wrapper">
                        <a href="#" className="social-link">
                            <img src={fbIcon} className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/spectrabr/" className="social-link">
                            <img src={linkedinIcon} className="social-icon" />
                        </a>
                        <a href="#" className="social-link">
                            <img src={instaIcon} className="social-icon" />
                        </a>
                        <a href="#" className="social-link">
                            <img src={ytIcon} className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="form-wrapper" onSubmit={(e) => e.preventDefault()}>
                    <form className="form-element">
                        <input type="text" name="name" id="name" placeholder="Nome" />
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                        <input type="text" name="subject" id="subject" placeholder="Assunto" />
                        <input type="text" name="message" id="message" placeholder="Mensagem" />

                        <button id="sendButton">Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;