import "./../Styles/storysection.style.css";

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
                src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                alt="gaku lange"
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
