import Screens from '../../assets/images/screens.webp';
import Logo3Video from '../Logo3/index.jsx';
import './header.css';

function Header() {
    return (
        <header className="container-hero">
            <div className="box-hero">
                <div className="container-txt">
                    <Logo3Video />
                </div>
                <div className="container-screens">
                    <img className="asset-hero" src={Screens} alt="preview responsive websites" />
                </div>
            </div>
        </header>
    );
}

export default Header;