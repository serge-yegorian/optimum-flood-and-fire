import './Footer.scss'
function Footer() {
  return (
    <div className='footer__background'>
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col">
          <h3 className="footer__subheading">About Us:</h3>
          <p className="footer__paragraph">
            Optimum Development & Construction is South Florida leading builder with a unique ability to transform a client’s vision. Specializing in Commercial & Residential New Construction and Renovations.
        </p>
        </div>
        <div className='footer__middle'>
        <div className="footer__col">
            <h3 className='footer__h'>Contact:</h3>
          <ul className="footer__list">
            <li className="footer__li">
              <a
                className="footer__a"
                href="mailto:info@optimumdevelopmentllc.com"
              >
                info@optimumdevelopmentllc.com
              </a>
            </li>
            <li className="footer__li">
                <a className="footer__a"
                href="callto:5613106081">
                    561 310 6081
                </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
            <h3 className='footer__h'>Media:</h3>
            <ul className="footer__list footer__media">
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="https://www.instagram.com/"><img className='footer__img' target="_blank" rel="noreferrer" src={require("../insta.png")} alt="instagram icon"/></a></li>
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="https://www.facebook.com/"><img className='footer__img' target="_blank" rel="noreferrer" src={require("../facebook.png")} alt="facebook icon"/></a></li>
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="https://www.twitter.com/"><img className='footer__img' target="_blank" rel="noreferrer" src={require("../twitter.png")} alt="twitter icon"/></a></li>
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="https://www.linkedin.com/"><img className='footer__img' target="_blank" rel="noreferrer" src={require("../linkedin.svg").default} alt="linkedIn icon"/></a></li>
            </ul>
        </div>
        </div>
      </div>
      {/* <div className="footer__bottom">
        <h4 className="footer__developer">Developed by Serge Yegorian</h4>
      </div> */}
    </footer>
    </div>
  );
}

export default Footer;
