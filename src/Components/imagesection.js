import { useEffect, useState } from "react";
import "./../Styles/imagesection.style.css";

const ImageSection = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(
        "https://portfolio-backend-1-l0e4.onrender.com/api/posts"
      );
      const data = await res.json();

      console.log("Fetched posts:", data);
      const baseURL = "https://portfolio-backend-1-l0e4.onrender.com";

      // Convert backend posts to card format
      const formatted = data.posts.map((post, index) => ({
        id: post._id || index,
        title: post.titles?.[0] || "Untitled Project",
        image: post.images?.[0]
          ? `${baseURL}${post.images[0]}`
          : "https://via.placeholder.com/400x300?text=No+Image",

        link: `/project/${post._id}`,
      }));

      setProjects(formatted);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  // Show only 4 initially unless "View More" is clicked
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

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
          {displayedProjects.map((project) => (
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
          {!showAll ? (
            <button onClick={() => setShowAll(true)}>View More</button>
          ) : (
            <button onClick={() => setShowAll(false)}>Show Less</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
