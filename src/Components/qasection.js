import { useState } from "react";
import "./../Styles/qasection.style.css";

const qaData = [
  {
    question:
      "What is your creative process for developing a multimedia story?",
    answer:
      "I start by understanding your goals, audience, and message through a discovery conversation. From there, I develop a concept that blends visual elements—photography, video, and design—into a cohesive narrative. I create mood boards or storyboards for approval, then move into production (shooting and filming), followed by editing and refining based on your feedback. The goal is to craft a story that resonates emotionally while achieving your objectives.",
  },
  {
    question: "How long does a typical project take from start to finish?",
    answer:
      "Timeline depends on project scope, but most projects follow this general structure: 1-2 weeks for concept development and planning, 1-3 days for shooting/filming (depending on complexity), and 1-2 weeks for editing and revisions. Simple social media content might take 1-2 weeks total, while comprehensive brand storytelling campaigns could take 4-6 weeks. I'll provide a detailed timeline during our initial consultation based on your specific needs.",
  },
  {
    question: "How many revisions are included, and what if I want changes?",
    answer:
      "Each project includes two rounds of revisions to ensure you're completely satisfied with the final product. The first revision addresses major structural or creative direction feedback, while the second handles fine-tuning and polish. Additional revisions beyond this can be accommodated for a small fee. I believe in collaborative storytelling, so your input throughout the process helps us get it right without needing excessive revisions.",
  },
  {
    question: "What do you charge, and what's included in your pricing?",
    answer:
      "Pricing varies based on project complexity, deliverables, and usage rights. A typical social media content package starts around ₹15,000-25,000, while comprehensive brand storytelling projects begin at ₹40,000+. This includes pre-production planning, shooting/filming, editing, music licensing, two revision rounds, and final file delivery in your preferred formats. Travel within the city is included; outstation projects are quoted separately. I'm happy to create a custom package that fits your budget and goals.",
  },
  {
    question: "What tools and software do you use?",
    answer:
      "For video editing, I work with Adobe Premiere Pro, DaVinci Resolve, and After Effects for motion graphics. Photography editing is done in Adobe Lightroom and Photoshop. For web and design work, I use modern website builders, React.js, and design tools like Figma. This toolkit allows me to deliver professional-quality content across all platforms while maintaining creative flexibility and technical excellence.",
  },
  {
    question: "Can you adapt your style for different platforms and audiences?",
    answer:
      "Absolutely. Each platform has unique requirements—Instagram and TikTok favor vertical, fast-paced storytelling with strong hooks in the first 3 seconds, while YouTube allows for longer-form narrative development. I tailor aspect ratios, pacing, captions, and visual style to match where your content will live and who will see it. During our initial consultation, we'll discuss your target audience and platform strategy to ensure the content performs well and connects authentically.",
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <span>{`0${index + 1}`}</span> {item.question}{" "}
                  </div>
                  <span className="icon">
                    {activeIndex === index ? "–" : "+"}
                  </span>
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
          <p className="email-heading">
            Have a follow-up
            <br />
            question?
          </p>
          <p className="email-subtext">Send me an email!</p>
          <p className="email-description">
            Learn more about how I work and how I can help you and your business
            bring a creative idea to life.
          </p>
          <button className="email-button">Email Me</button>
        </div>
      </div>
    </div>
  );
};

export default QASection;
