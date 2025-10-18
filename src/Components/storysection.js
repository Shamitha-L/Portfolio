import "./../Styles/storysection.style.css";
import profile from "./../assets/image1.jpeg";

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
              <img
                src={profile}
                alt="Vicky"
              />

              <div className="image-icons">
                <span>🔍</span>
                <span>❤️</span>
                <span>🔗</span>
              </div>
            </div>
            <div className="profile-info">
              <strong>gaku lange</strong>
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
