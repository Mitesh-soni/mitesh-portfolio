import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "../styles/ProjectDetails.css";

// --- IMPORTS ---
import p1Dashboard from "../assets/Book-Store/Screenshot 2026-04-17 232310.png";
import p1Mob1 from "../assets/Book-Store/Screenshot 2026-04-17 232328.png";

import p2Dashboard from "../assets/Ecommerce-App/Screenshot 2026-04-17 232130.png";
import p2Mob1 from "../assets/Ecommerce-App/Screenshot 2026-04-17 232155.png";

import p3Dashboard from "../assets/Go-Food/Screenshot 2026-04-17 231002.png";
import p3Mob1 from "../assets/Go-Food/Screenshot 2026-04-17 231012.png";

import p4Dashboard from "../assets/Cabik/Screenshot 2026-04-22 002340.png";
import p4Mob1 from "../assets/Cabik/Screenshot 2026-04-22 002436.png";
import p4Mob2 from "../assets/Cabik/Screenshot 2026-04-22 002459.png";
import p4Mob3 from "../assets/Cabik/Screenshot 2026-04-22 002741.png";
import p4Mob4 from "../assets/Cabik/Screenshot 2026-04-22 002805.png";

import p5Dashboard from "../assets/Spotify-Clone/Screenshot 2026-04-27 230943.png";
import p5Mob1 from "../assets/Spotify-Clone/thibault-penin-Eilz6WqzC5o-unsplash.jpg";

import p6Dashboard from "../assets/user-clone/Screenshot 2026-04-17 230047.png";
import p6Mob1 from "../assets/user-clone/Screenshot 2026-04-17 230055.png";
import githubIcon from "../assets/Skills/GitHub.png";

type Project = {
  id: number;
  title: string;
  introHeading: string;
  description: string;
  subDescription: string;
  features: string[];
  role: string;
  tools: string;
  timeline: string;
  githubLink?: string;
  designSystem?: {
    font: string;
    colors: string[];
  };
  dashboardImage: string;
  mobileImage1?: string;
  mobileImage2?: string;
  mobileImage3?: string;
  mobileImage4?: string;
  mobileImage5?: string;
};

// --- DATA ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "Cabik Marketplace",
    introHeading:
      "A full-stack vehicle marketplace that combines customer browsing, dealer inventory, financing, and order tracking.",
    description:
      "Cabik is designed as a vehicle sales and financing experience with a polished customer storefront and a dealer panel. The app supports browsing cars, comparing options, and moving through the purchase flow with clear visual hierarchy.",
    subDescription:
      "The dealer side focuses on managing inventory, sales, and invoices while the customer side surfaces vehicle discovery, summaries, EMI options, and checkout. The case study screens show the flow from login through product selection and payment confirmation.",
    features: [
      "Customer and Dealer Portal Split",
      "Vehicle Discovery and Filter Flow",
      "Inventory, EMI, and Price Summary",
      "Invoice and Order Tracking Screens",
    ],
    role: "Full-Stack Developer",
    tools: "React, Node.js, Payments UI, PDF Invoices",
    timeline: "6 Months",
    githubLink: "https://github.com/Mitesh-soni/Cabik",
    designSystem: {
      font: "Outfit",
      colors: ["#090b14", "#8b5cf6", "#f6f7ff", "#ff6b5c"],
    },
    dashboardImage: p4Dashboard,
    mobileImage1: p4Mob1,
    mobileImage2: p4Mob2,
    mobileImage3: p4Mob3,
    mobileImage4: p4Mob4,
  },
  {
    id: 2,
    title: "Ecommerce",
    introHeading:
      "A minimal commerce front page focused on product discovery and clarity.",
    description:
      "This project explores a lightweight ecommerce shell where users can quickly orient themselves using a simple top navigation and minimal visual clutter. The composition prioritizes whitespace and immediate access to core browsing actions.",
    subDescription:
      "The visual approach is intentionally restrained to improve scanability and reduce cognitive load. It serves as a strong foundation for scaling into collections, product details, and account modules.",
    features: [
      "Minimal Navigation Bar",
      "Clear Entry Point Layout",
      "Whitespace-driven Structure",
      "Fast Content Scannability",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS",
    timeline: "1 Week",
    designSystem: {
      font: "Poppins",
      colors: ["#090b14", "#ff6b5c", "#f6f7ff", "#8b5cf6"],
    },
    dashboardImage: p2Dashboard,
    mobileImage1: p2Mob1,
  },
  {
    id: 3,
    title: "GoFood Ordering System",
    introHeading:
      "A food-ordering interface with practical onboarding and account flows.",
    description:
      "GoFood Ordering System streamlines user registration and login with straightforward form interactions and strong visual contrast. The layout combines utility-first structure with familiar ecommerce behavior.",
    subDescription:
      "The design emphasizes speed: users can sign up, confirm key details, and continue into ordering without unnecessary steps. Real-world form patterns are used to improve completion rate and usability.",
    features: [
      "Authentication-first Flow",
      "Location-ready Form Inputs",
      "High Contrast CTA Actions",
      "Background-led Branding",
    ],
    role: "Full-Stack Developer",
    tools: "MongoDB, Express, React, Node.js",
    timeline: "2 Weeks",
    designSystem: {
      font: "Poppins",
      colors: ["#090b14", "#8b5cf6", "#f6f7ff", "#ff6b5c"],
    },
    dashboardImage: p3Dashboard,
    mobileImage1: p3Mob1,
  },
  {
    id: 4,
    title: "BookStore",
    introHeading:
      "An online learning storefront with clean navigation and guided user journeys.",
    description:
      "BookStore Learning Platform is designed as a modern educational interface where users can browse courses, search quickly, and move through account actions without friction. The dark visual system keeps focus on the core content blocks and call-to-action elements.",
    subDescription:
      "I focused on balancing readability and conversion. From hero hierarchy to login modal behavior, each section is structured to help users understand the offering at a glance and take the next step confidently.",
    features: [
      "Hero-first Content Layout",
      "Search-led Navigation",
      "Modal Login Experience",
      "Dark Theme Readability",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS, Framer Motion",
    timeline: "2 Weeks",
    githubLink: "https://github.com/Mitesh-soni/Book-Store",
    designSystem: {
      font: "Poppins",
      colors: ["#090b14", "#ff6b5c", "#f6f7ff", "#8b5cf6"],
    },
    dashboardImage: p1Dashboard,
    mobileImage1: p1Mob1,
  },
  {
    id: 5,
    title: "Spotify Clone",
    introHeading:
      "A music streaming experience focused on browsing, listening, and creating a familiar Spotify-style interface.",
    description:
      "Spotify Clone recreates the feel of a modern music platform with a strong visual hierarchy, dark theme styling, and clean playback-oriented layouts. The case study highlights how the interface keeps album art, navigation, and content discovery easy to scan.",
    subDescription:
      "The design balances recognition and usability: users can move through playlists, discover tracks, and focus on the content without unnecessary friction. The screens below show the Spotify-inspired layout, branding, and content presentation.",
    features: [
      "Music Discovery Layout",
      "Dark Theme Visual System",
      "Playlist and Album Browsing",
      "Content-first Navigation",
    ],
    role: "Full-Stack Developer",
    tools: "HTML, CSS, UI Recreation",
    timeline: "2 Weeks",
    githubLink: "https://github.com/Mitesh-soni/spotify-clone",
    designSystem: {
      font: "Inter",
      colors: ["#090b14", "#8b5cf6", "#f6f7ff", "#ff6b5c"],
    },
    dashboardImage: p5Dashboard,
    mobileImage1: p5Mob1,
  },
  {
    id: 6,
    title: "Uber Clone",
    introHeading:
      "A ride-share inspired authentication experience with modern UI patterns.",
    description:
      "Uber Auth Clone recreates a familiar onboarding and sign-in flow using clean typography, bold CTA treatment, and step-by-step progression. The interface emphasizes confidence and task completion.",
    subDescription:
      "This project focuses on practical UX details: spacious form fields, predictable interactions, and clear action labels. It demonstrates how recognizable patterns can still feel polished and intentional.",
    features: [
      "Two-step Onboarding",
      "High Visibility CTA Buttons",
      "Sign-in and Captain Modes",
      "Responsive Form Layout",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS",
    timeline: "1 Week",
    designSystem: {
      font: "Inter",
      colors: ["#090b14", "#ff6b5c", "#f6f7ff", "#8b5cf6"],
    },
    dashboardImage: p6Dashboard,
    mobileImage1: p6Mob1,
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const project = projectsData.find((p) => p.id === Number(id));
  const projectImages = [
    project?.dashboardImage,
    project?.mobileImage1,
    project?.mobileImage2,
    project?.mobileImage3,
    project?.mobileImage4,
    project?.mobileImage5,
  ].filter((image): image is string => Boolean(image));

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found!</h2>
      </div>
    );
  }

  return (
    <div className="pd-main">
      {/* Background Glowing Orbs */}
      <div className="pd-orb pd-orb-1"></div>
      <div className="pd-orb pd-orb-2"></div>

      {/* 
        PATTERN: IMMERSIVE EDITORIAL LAYOUT
        Centered huge hero -> Full width image -> Left Label / Right Content Rows
      */}

      {/* 1. HERO SECTION */}
      <motion.section
        className="pd-hero"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={stagger}
      >
        <div className="pd-container">
          <motion.div className="pd-hero-center" variants={fadeUp}>
            <span className="pd-badge">Case Study</span>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-subtitle">{project.introHeading}</p>
          </motion.div>

          <motion.div className="pd-meta-bar" variants={fadeUp}>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Role</span>
              <span className="pd-meta-value">{project.role}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Tools</span>
              <span className="pd-meta-value">{project.tools}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Timeline</span>
              <span className="pd-meta-value">{project.timeline}</span>
            </div>
            {project.githubLink ? (
              <div className="pd-meta-item">
                <span className="pd-meta-label">GitHub</span>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-meta-link"
                  aria-label="View GitHub repository"
                  title="View GitHub repository"
                >
                  <img src={githubIcon} alt="GitHub" className="pd-github-icon" />
                </a>
              </div>
            ) : null}
          </motion.div>
        </div>
      </motion.section>

      {/* 2. CONTENT ROWS (Left Label, Right Value) */}
      <section className="pd-content">
        <div className="pd-container">
          {/* Overview Row */}
          <motion.div
            className="pd-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="pd-col-label">
              <h3>Overview</h3>
            </div>
            <div className="pd-col-content">
              <p className="pd-text-large">{project.description}</p>
              <p className="pd-text-regular">{project.subDescription}</p>
            </div>
          </motion.div>

          {/* Features Row */}
          <motion.div
            className="pd-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="pd-col-label">
              <h3>Key Features</h3>
            </div>
            <div className="pd-col-content">
              <div className="pd-features-grid">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="pd-feature-card">
                    <span className="pd-feature-dot"></span>
                    <span className="pd-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Desktop Showcase Row */}
          {projectImages.length > 0 && (
            <motion.div
              className="pd-row no-border last-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="pd-col-label">
                <h3>Desktop View</h3>
              </div>
              <div className="pd-col-content">
                <div className="pd-desktop-gallery">
                  {projectImages.map((image, index) => (
                    <div key={index} className="pd-main-image-wrap">
                      <img
                        src={image}
                        alt={`${project.title} preview ${index + 1}`}
                        className="pd-main-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
