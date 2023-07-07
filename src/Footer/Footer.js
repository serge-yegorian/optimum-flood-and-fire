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
                href="callto:5619066215">
                    561 906 6215
                </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
            <h3 className='footer__h'>Media:</h3>
            <ul className="footer__list footer__media">
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="#"><img className='footer__img' src={require("../insta.png")}/></a></li>
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="#"><img className='footer__img' src={require("../facebook.png")}/></a></li>
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="#"><img className='footer__img' src={require("../twitter.png")}/></a></li>
                <li className="footer__li footer__media-li"><a className='footer__media-a' href="#"><img className='footer__img' src={require("../linkedin.svg").default}/></a></li>
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
