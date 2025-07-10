import asteriskImg from "../img/asterisk-2.svg";


function ContactUs() {
    return (
        <div className="contact-container">
            <div className="main-wrapper">
                <span>E aí? Vai <br />perder tempo?</span>

                <div className="separator">
                    <span>Entre em contato e fale com o nosso time!</span>
                    <a href="#" target="_blank" rel="noopener noreferrer">Enviar mensagem</a>
                </div>
            </div>
            <img src={asteriskImg} className="asterisk-bg" />
            <div className="form-wrapper">
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

                        </a>
                        <a href="#" className="social-link">
                            
                        </a>
                        <a href="#" className="social-link">
                            
                        </a>
                        <a href="#" className="social-link">
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;