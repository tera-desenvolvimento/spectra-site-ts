import arrowImg from '../img/arrow.svg';

import '../style/aboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <b>Sobre a nossa galera</b>
            <span>Somos apaixonados por tecnologia e comprometidos em oferecer soluções que otimizem o desempenho de empresas, reduzindo custos e expandindo possibilidades. Para nós, cada cliente é um parceiro, e cada desafio, uma oportunidade de criar algo extraordinário.</span>
            <span>Estamos na vanguarda da automação e da gestão inteligente porque sabemos que o futuro pertence àqueles que ousam inovar. Nosso propósito é não apenas acompanhar as mudanças, mas liderá-las, construindo um mundo onde a tecnologia e eficiência caminhem juntas.</span>
            <a href="#">Fale com nosso time <img src={arrowImg} className='arrow' /></a>
        </div>
    )
}

export default AboutUs;