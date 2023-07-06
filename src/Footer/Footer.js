function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col">
          <h3 className="footer__subheading">About Us:</h3>
          <p className="footer__paragraph">
            Optimum Development & Construction is South Florida leading builder with a unique ability to transform a client’s vision. Specializing in Commercial & Residential New Construction and Renovations.
        </p>
        </div>
        <div className="footer__col">
          <ul className="footer__list">
            Contact:
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
            <ul className="footer__list">
                Media:
                <li>instagram</li>
                <li>facebook</li>
                <li>linkedin</li>
                <li>twitter</li>
            </ul>
        </div>
        <div className="footer__col">
            <a href="#" className="footer__main-link">More Optimum Services</a>
        </div>
      </div>
      <div className="footer__bottom">
        <h4 className="footer__developer">Developed by Serge Yegorian</h4>
      </div>
    </footer>
  );
}

export default Footer;
