import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../Styles/projectdetails.style.css";

const ProjectDetails = () => {
  const { id } = useParams(); // get project id from URL
  const [project, setProject] = useState(null);

 useEffect(() => {
  fetchProject();
  // eslint-disable-next-line
}, []);

  const fetchProject = async () => {
    try {
      const res = await fetch(
        `https://portfolio-backend-1-l0e4.onrender.com/api/posts/${id}`
      );
      const data = await res.json();

      const baseURL = "https://portfolio-backend-1-l0e4.onrender.com";

      setProject({
        title: data.post.titles?.[0],
        paragraphs: data.post.paragraphs?.[0],
        images: data.post.images?.map((img) => `${baseURL}${img}`),
        videos: data.post.videos?.map((vid) => `${baseURL}${vid}`),
      });
    } catch (err) {
      console.error("Error loading project:", err);
    }
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-details-page">
      <h3>{project.title}</h3>
      <p>{project.paragraphs}</p>

      {/* Images */}
      <h5>Images</h5>
      <div className="image-gallery">
        {project.images?.map((img, index) => (
          <img key={index} src={img} alt="project" className="detail-image" />
        ))}
      </div>

      {/* Videos */}
      {project.videos?.length > 0 && (
        <>
          <h5>Videos</h5>
          <div className="video-gallery">
            {project.videos.map((video, index) => (
              <video
                key={index}
                width="400"
                controls
                src={video}
                className="detail-video"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
