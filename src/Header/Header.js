import './Header.scss';
function Header() {
    return (
        <div className='header__background'>
            <header className="header">
                <div className='header__text'>
                    <h1 className="header__heading">Expert Fire & Flood Restoration </h1>
                    <p className="header__description">Our team of skilled professionals specializes in turning disaster into opportunity, breathing new life into your cherished space</p>
                </div>
                <div className='header__image-div'>
                    <img className="header__logo" src={require('../logo.png')}/>
                </div>
            </header>
        </div>
    )
};

export default Header;