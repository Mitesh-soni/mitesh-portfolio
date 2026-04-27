import React from "react";
import { motion } from "framer-motion";

const talkAndTasteImage =
  "https://images.pexels.com/photos/4549413/pexels-photo-4549413.jpeg?auto=compress&cs=tinysrgb&w=1260";

const iTourAiImage =
  "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260";

const iNoidSolutionsImage =
  "https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&w=1260";

const caseStudiesTimeline = [
  {
    id: "cs1",
    title: "Talk&Taste",
    desc: "Talk & Taste is a business networking and social media platform designed for startups, entrepreneurs, and companies to connect, collaborate, and grow their professional presence in one place. It allows businesses to create profiles, showcase their services, build valuable connections, and discover relevant opportunities through an intelligent matchmaking system. The platform also includes a credit-based model where users can unlock premium features by spending credits, along with real-time chat for seamless communication. This product was built using React and TypeScript for the frontend, Node.js for backend services, and PostgreSQL for scalable data management.",
    image: talkAndTasteImage,
  },
  {
    id: "cs2",
    title: "iTourAi Admin Panel",
    desc: "was built as a complete internal administration platform to streamline business operations and platform management. The frontend was developed in React and TypeScript to deliver a responsive and efficient user experience, while the backend architecture was built in Node.js and Express.js to handle secure OTP email authentication, user management, activity monitoring, notification delivery, admin controls, and scalable API services. PostgreSQL was used for structured data management, enabling reliable storage of users, access records, notifications, and operational data for a production-ready admin system.",
    image: iTourAiImage,
  },
  {
    id: "cs3",
    title: "iNoid Solutions",
    desc: "Built the company’s official web presence with service pages, portfolio showcases, client sections, case studies, and lead-generation forms. Focused on performance, responsive UI, and scalable frontend development.",
    image: iNoidSolutionsImage,
  },
];

export const Experience = () => {
  return (
    <div id="experience" className="cs-section-gap">
      <div className="cs-heading">
        <span className="proj-eyebrow">Experience</span>
        <h2 className="proj-title">
          Selected <span className="underline-accent">Experience</span>
        </h2>
      </div>
      <div className="cs-timeline-container">
        {/* Central vertical line */}
        <div className="cs-timeline-line" />

        {caseStudiesTimeline.map((cs, i) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={`cs-timeline-row ${i % 2 === 1 ? "cs-row-reverse" : ""}`}
            style={{ animation: "none" }} // Prevents CSS animations from fighting frame-motion
          >
            {/* Circle Number */}
            <div className="cs-timeline-circle">{i + 1}</div>

            {/* Content Side */}
            <div className="cs-timeline-content">
              <h2 className="cs-name">{cs.title}</h2>
              <p className="cs-desc">
                <span className="cs-brand">{cs.title}</span> {cs.desc}
              </p>
            </div>

            {/* Image Side */}
            <div className="cs-timeline-img-wrap">
              <img src={cs.image} alt={cs.title} className="cs-timeline-img" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
