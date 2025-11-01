import { useState } from "react";
import "./../Styles/servicesection.style.css";

const toolbox = [
  { id: 1, name: "Premiere Pro", icon: "🎬" },
  { id: 2, name: "After Effects", icon: "✨" },
  { id: 3, name: "Photoshop", icon: "🖼️" },
  { id: 4, name: "Lightroom", icon: "📸" },
  { id: 5, name: "InDesign", icon: "📘" },
];

const services = [
  {
    title: "Photo & Video Production",
    description:
      "Capturing compelling visuals for brands, products, events, and personal stories.",
  },
  {
    title: "Content Editing & Post-Production",
    description:
      "Professional photo retouching, color grading, and cinematic video editing.",
  },
  {
    title: "Visual Story Development",
    description:
      "Concept creation, storyboarding, and narrative design for campaigns and personal brands.",
  },
  {
    title: "Social Media Content Creation",
    description:
      "Short-form videos, reels, and engaging posts tailored for platforms like Instagram, TikTok, and YouTube.",
  },
  {
    title: "Brand Showreels & Highlight Videos",
    description:
      "Polished highlight reels and promotional content to showcase brands, products, or events.",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Creating visual identities, logos, marketing materials, and branded graphics that tell your story.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered interfaces and experiences for websites and digital products.",
  },
  {
    title: "Website Visual Assets",
    description:
      "Creating web-ready photos, hero videos, and banner assets that elevate online presence.",
  },
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="service-section-wrapper">
      <div className="service-left">
        <h2>
          Ways We Can Bring Your <br />
          <span>Vision to Life.</span>
        </h2>

        <div className="toolbox">
          <p>My creative toolbox</p>
          <div className="tool-icons">
            {toolbox.map((tool) => (
              <div className="tool-icon" key={tool.id} title={tool.name}>
                {tool.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="service-right">
        {services.map((item, index) => (
          <div key={index} className="service-item">
            <div
              className="service-header"
              onClick={() => toggleService(index)}
            >
              <span>{item.title}</span>

              {/* Toggle Icon */}
              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Description Expand */}
            {activeIndex === index && (
              <p className="service-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
