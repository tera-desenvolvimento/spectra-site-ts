import treeLogo from '../img/customers/LOGO-TREE-NETWORK.png';
import jumpLogo from '../img/customers/LOGO-JUMP-NETWORK.png';
import fiberLogo from '../img/customers/LOGO-THE-FIBER.png';
import ngtLogo from '../img/customers/LOGO-NGT.png';
import conectG2Logo from '../img/customers/LOGO-CONECT-G2.png';
import mognetLogo from '../img/customers/LOGO-MOGNET.png';
import cliqueDFLogo from '../img/customers/LOGO-CLIQUE-DF.png';

import '../style/customers.css';

function Customers() {
  return (
    <div className="customers-container">
        <b>Algumas empresas que confiam na Spectra.</b>
        <div className="slider">
            <ul className="customers-list slider-track">
                <li className="customer-item slide">
                    <img src={treeLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={jumpLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={fiberLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={ngtLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={conectG2Logo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={mognetLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={cliqueDFLogo} alt="logo-1"/>
                </li>
            </ul>
            <ul className="customers-list slider-track">
                <li className="customer-item slide">
                    <img src={treeLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={jumpLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={fiberLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={ngtLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={conectG2Logo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={mognetLogo} alt="logo-1"/>
                </li>
                <li className="customer-item slide">
                    <img src={cliqueDFLogo} alt="logo-1"/>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Customers;