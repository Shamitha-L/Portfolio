import { useState } from "react";
import "./../Styles/qasection.style.css";

const qaData = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "I focus primarily on creative direction, cinematic video production, photography, and short-form content. My work ranges from high-end brand campaigns to editorial photography and social reels.",
  },
  {
    question: "How involved are you in the creative process?",
    answer:
      "I'm deeply involved from concept to execution. I collaborate closely with clients to ensure the creative direction aligns with their vision.",
  },
  {
    question: "Do you take on smaller projects, or only large campaigns?",
    answer:
      "I take on both! From small editorial shoots to full-scale brand campaigns, I adapt to your needs and goals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope, but most projects take between 1–4 weeks. Larger campaigns may take longer.",
  },
  {
    question: "Do you handle everything yourself, or do you have a team?",
    answer:
      "I handle core creative work myself, but also collaborate with a trusted team when projects require additional skills or scale.",
  },
  {
    question: "Can you match my existing brand aesthetic?",
    answer:
      "Yes. I always begin by studying your brand and style, ensuring my work feels like a natural extension of your existing identity.",
  },
  {
    question: "How do you structure pricing and payments?",
    answer:
      "Pricing is project-based and transparent. I provide detailed quotes up front and flexible payment options.",
  },
];

const QASection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default first question open

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="qa-section-wrapper">
      <div className="qa-left">
        <h2>
          <span className="black">Your questions</span>{" "}
          <span className="gray">answered.</span>
        </h2>

        <div className="accordion">
          {qaData.map((item, index) => (
            <div
              className={`accordion-item ${
                activeIndex === index ? "expanded" : ""
              }`}
              key={index}
              onClick={() => toggleIndex(index)}
            >
              <div className="question">
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between', width: '100%'}}>
                    <div>
                <span>{`0${index + 1}`}</span> {item.question} </div>
                <span className="icon">{activeIndex === index ? "–" : "+"}</span>
                </div>
              </div>
              {activeIndex === index && (
                <div className="answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="qa-right">
        <div className="email-card">
          <p className="email-heading">Have a follow-up<br />question?</p>
          <p className="email-subtext">Send me an email!</p>
          <p className="email-description">
            Learn more about how I work and how I can help you and your business bring a creative idea to life.
          </p>
          <button className="email-button">Email Me</button>
        </div>
      </div>
    </div>
  );
};

export default QASection;
