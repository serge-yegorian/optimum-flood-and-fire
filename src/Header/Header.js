import './Header.scss';
function Header() {
    return (
            <header className="header">
                <h1 className="header__heading">Expert Fire & Flood Restoration </h1>
                <p className="header__description">Our team of skilled professionals specializes in turning disaster into opportunity, breathing new life into your cherished space</p>
                <img className="header__logo" src={require('../logo.png')}/>
            </header>
    )
};

export default Header;