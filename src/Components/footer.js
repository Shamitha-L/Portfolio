import "./../Styles/footer.style.css";
import { FaYoutube, FaInstagram } from "react-icons/fa";

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
              <a href="mailto:Vigneshbalakumar11@gmail.com">
                Vigneshbalakumar11@gmail.com
              </a>
            </div>
            <div className="footer-social">
              <p>Social</p>
              <div className="social-icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtube.com/@the.adv_kid?si=aLO-yJKWNGMrMeMo"
                >
                  <FaYoutube />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/the.adv_kid?igsh=aWg3dnZxb2ZhYzkw&utm_source=qr"
                >
                  <FaInstagram />
                </a>
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
