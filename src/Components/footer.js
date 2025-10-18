import "./../Styles/footer.style.css";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-inside-wrapper">
          {/* Heading */}
          <div className="footer-description1">
            <h1 className="footer-title">Lets create</h1>
            <h1 className="footer-subtitle">incredible work together.</h1>
          </div>

          {/* Contact + Social */}
          <div className="footer-contact-social">
            <div className="footer-contact">
              <p>Email</p>
              <a href="mailto:team@gakuyen.com">team@gakuyen.com</a>
            </div>
            <div className="footer-social">
              <p>Social</p>
              <div className="social-icons">
                <a href="/youtube"><FaYoutube /></a>
                <a href="/instagram"><FaInstagram /></a>
                <a href="/tiktok"><FaTiktok /></a>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          {/* Bottom Info */}
          <div className="footer-bottom">
            <p>Based in Tokyo, Japan</p>
            <div className="footer-links">
              <a href="/terms-and-services">Terms of service</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

          {/* Copyright */}
          <p className="footer-copy">© 2025 Gaku</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
