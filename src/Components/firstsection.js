import "./../Styles/firstsection.style.css";

const Firstsection = () => {
  return (
    <div className="first-section-wrapper">
      {/* Status Badge */}
      <div className="status-badge">
        <span className="status-dot"></span>
        Available for Inquiries
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
        hello, I’m <span className="highlight">Gaku</span> – a mixed-media
        specialist based out of <span className="highlight">Tokyo, Japan.</span>
      </p>
      <p className="first-description">
        I execute photo, video, and design projects.
      </p>

      {/* Button */}
      <button className="cta-button">
        <img
          src="https://i.pravatar.cc/40"  /* Dummy profile pic */
          alt="avatar"
          className="cta-avatar"
        />
        Send me a message
      </button>
    </div>
  );
};

export default Firstsection;
