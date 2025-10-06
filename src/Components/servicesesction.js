import "./../Styles/servicesection.style.css";

const toolbox = [
  { id: 1, name: "Premiere Pro", icon: "🎬" },
  { id: 2, name: "After Effects", icon: "✨" },
  { id: 3, name: "Photoshop", icon: "🖼️" },
  { id: 4, name: "Lightroom", icon: "📸" },
  { id: 5, name: "InDesign", icon: "📘" },
];

const services = [
  "Cinematography / Directing",
  "Creative Direction & Shot Planning",
  "Video Editing & Motion Design",
  "Color Grading & Lookbuilding",
  "Photography & Retouching",
  "Sound Design & Audio Polish",
  "Design & Layout for Print/Digital",
];

const ServiceSection = () => {
  return (
    <div className="service-section-wrapper">
      <div className="service-left">
        <h2>
          Services that <br />
          <span>shape your story.</span>
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
        <ul>
          {services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
