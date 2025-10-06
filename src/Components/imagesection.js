import "./../Styles/imagesection.style.css";

const projects = [
  {
    id: 1,
    title: "airasia / american tourister",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "aape",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "salomon / brand campaign",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "ferrari",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const ImageSection = () => {
  return (
    <div className="image-section-wrapper">
      <div className="image-title-content">
        <span>
          Be among the first to discover fresh, bold creative work — something
          small today, destined to make a big impact tomorrow.
        </span>
      </div>

      <div className="image-subtitle-content">
        <div className="subtitle">
          Some of my <span>Works</span>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-title">{project.title}</span>
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          <a href="#">View All My Projects</a>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
