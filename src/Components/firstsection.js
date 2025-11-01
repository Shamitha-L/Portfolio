import "./../Styles/firstsection.style.css";
import profile from "./../assets/profile-vicky.jpeg";

const Firstsection = () => {
  return (
    <div className="first-section-wrapper">
      {/* Status Badge */}
      <div className="status-badge">
        <span className="status-dot"></span>
        Let us Connect
      </div>

      {/* Title */}
      <h1 className="first-title">Modern</h1>
      <h1 className="first-subtitle">renaissance</h1>

      {/* Tagline */}
      <p className="first-tagline">
        PERHAPS TODAY ✨
      </p>

      {/* Description */}
      <p className="first-description">
        hello, I’m <span className="highlight">Vicky</span> – Aspiring Visual Storyteller <span className="highlight">Coimbatore, </span>
      </p>
      <p className="first-description">
        I execute photo, video, and design projects.
      </p>

      {/* Button */}
      <button className="cta-button">
        <img
          src={profile}  
          alt="avatar"
          className="cta-avatar"
        /> <div className="cta-button-plus">+</div>
        <div className="cta-button-animation">You</div>
        Send me a message
      </button>
    </div>
  );
};

export default Firstsection;
