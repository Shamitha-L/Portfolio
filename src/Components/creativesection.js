import "./../Styles/creativesection.style.css";

const CreativeSection = () => {
  return (
    <section className="creative-section-wrapper">
      <div className="creative-text-content">
        <h2 style={{color:'#666'}}>
          Curated Insights & <br />
          <span style={{color:'#000'}}>creative resources.</span>
        </h2>
        <a href="/products" className="view-all-link">
          View All
        </a>
      </div>

      <div className="creative-card">
        <img
          src="https://www.iphotography.com/wp-content/uploads/2023/06/Best-Cameras-for-Professional-Photography-6.jpg"
          alt="Filmmaking Tools / Setup"
          className="creative-card-image"
        />

        <div className="creative-card-text">Filmmaking Tools / Setup</div>
      </div>
    </section>
  );
};

export default CreativeSection;
