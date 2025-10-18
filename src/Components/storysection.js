import "./../Styles/storysection.style.css";
import profile from "./../assets/image1.jpeg";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const StorySection = () => {
  return (
    <div className="story-section-wrapper">
      <div className="story-section-header">
        <div className="header-title">
          <span className="gray">A creative revival approach</span>
          <br />
          <span className="black">to visual storytelling.</span>
        </div>
        <div className="divider">
          <div className="story-section-image">
            <div className="image-container">
              <img src={profile} alt="Vicky" />

              <div className="image-icons">
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
            <div className="profile-info">
              <strong>Vicky</strong>
              <p>photographer, filmmaker, creative</p>
            </div>
          </div>

          <div className="story-section-content">
            <p>
              I'm VIKI, a professional web developer and designer with a strong
              foundation in building engaging websites. Web development and
              design are my career focus.
            </p>
            <p>
              Beyond my profession, photography and videography are my creative
              passions – ways I explore storytelling through cinematic video
              editing and compelling visuals. These artistic pursuits fuel my
              creativity and inspire fresh ideas for my professional work.
            </p>
            <p>
              While my portfolio is growing, I'm excited to connect and
              collaborate with clients who are ready to be among the first to
              discover fresh, bold creative work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
