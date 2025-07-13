import roundArrowImg from '../img/round-arrow.svg';
import asteriskImg from '../img/asterisk.svg';
import personsImg from '../img/persons.svg';
import arrowImg from '../img/arrow.svg';
import arrowBlackImg from '../img/arrow-black.svg';

import '../style/infoCards.css';

function InfoCards() {
    return (
        <div className="info-cards-container">
            <div className="separator">
                <div className="card-big">
                    <b>Conheça nossos serviços:</b>
                    <div className="card-content">
                        <img src={roundArrowImg} className='round-arrow' />
                        <span>Potencialize sua equipe com IA. Nossos assistentes otimizam o atendimento, automatizam tarefas e entregam resultados rápidos e precisos.</span>
                    </div>
                    <div className="card-images">
                        <img src={personsImg} className='persons' />
                        <img src={asteriskImg} className='asterisk' />
                    </div>
                    <div className="card-footer">
                        <a href="https://wa.me/+558233115350" target='_blank'>Clique aqui para conferir <img src={arrowImg} className='arrow' /></a>
                    </div>
                </div>
            </div>
            <div className="separator">
                <div className="card-small">
                    <b>Já conhece o <br />Contrato Online?</b>
                    <span>Automatize suas vendas com nosso Contrato Online. Permita assinaturas a qualquer hora e simplifique a gestão com integração ao ERP.</span>
                    <div className="card-footer">
                        <a href="https://wa.me/+558233115350" target='_blank'>Clique aqui para conferir <img src={arrowImg} className='arrow' /></a>
                    </div>
                </div>
                <div className="card-small white">
                    <b>Tenha um Assistente de IA</b>
                    <span>Revolucione sua comunicação integrando o WhatsApp às suas operações. Agende, rastreie e gerencie interações diretamente no app, mantendo o atendimento ágil e centralizado.</span>
                    <div className="card-footer">
                        <a href="https://wa.me/+558233115350" target='_blank'>Clique aqui para conferir <img src={arrowBlackImg} className='arrow' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCards;