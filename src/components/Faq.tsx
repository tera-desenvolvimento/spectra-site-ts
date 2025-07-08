import img01 from "../img/01.svg";
import img02 from "../img/02.svg";
import img03 from "../img/03.svg";
import img04 from "../img/04.svg";

import '../style/faq.css';

function Faq() {
    return (
        <div className="faq-container">
            <b className="title">Algumas dúvidas frequentes</b>

            <div className="faq-grid-wrapper">
                <div className="faq-card">
                    <div>
                        <b>Como funciona a solução <br /> de Contrato Online?</b>
                        <span>A solução permite que seus clientes assinem contratos digitalmente, a qualquer hora e de qualquer lugar. É integrada ao ERP, garantindo sincronização automática de dados e eliminando erros operacionais.</span>
                    </div>
                    <img src={img01} className="number-img left" />
                </div>

                <div className="faq-card">
                    <div className='horizontal'>
                        <b>O que é o Zap Key e como ele pode ajudar minha empresa?</b>
                        <span>O Zap Key integra o WhatsApp aos seus processos operacionais, permitindo envio de mensagens automatizadas, notificações e interações rápidas com os clientes. Isso agiliza a comunicação e melhora o relacionamento com seus usuários.</span>
                    </div>
                    <img src={img02} className="number-img left" />
                </div>

                <div className="faq-card">
                    <div>
                        <b>Os Assistentes de IA substituem o atendimento humano?</b>
                        <span>Não! Nossos Assistentes de IA trabalham em conjunto com sua equipe, automatizando tarefas repetitivas e melhorando a eficiência. Isso libera mais tempo para que seus colaboradores se concentrem em atividades estratégicas e personalizadas.</span>
                    </div>
                    <img src={img03} className="number-img right" />
                </div>

                <div className="faq-card">
                    <div>
                        <b>Quais os benefícios de adotar essas soluções para meu negócio?</b>
                        <span>Com as soluções da Spectra, você otimiza seus processos, reduz custos operacionais, melhora a experiência dos seus clientes e aumenta a eficiência de toda a equipe. É a transformação digital ideal para o crescimento sustentável do seu negócio.</span>
                    </div>
                    <img src={img04} className="number-img right" />
                </div>
            </div>
        </div>
    )
}

export default Faq;