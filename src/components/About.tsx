import React, { useEffect, useMemo, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Profile from "../assets/Profile.png";
import ResumeFile from "../assets/Resume/mitesh-soni-full-stack-developer-resume.pdf";
import { showResumeToast } from "../utils/toastUtils";
import "../styles/About.css";

const RESUME_FILE_NAME = "mitesh-soni-full-stack-developer-resume.pdf";
const RESUME_FILE_PATH = ResumeFile;

export default function About() {
  const [today, setToday] = useState(new Date());

  const handleResumeDownload = async (event) => {
    event.preventDefault();
    showResumeToast.downloadStarted();

    try {
      const downloadLink = document.createElement("a");

      downloadLink.href = RESUME_FILE_PATH;
      downloadLink.download = RESUME_FILE_NAME;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setTimeout(() => {
        showResumeToast.downloadSuccess();
      }, 2000);
    } catch (error) {
      console.error("Resume download failed:", error);
      setTimeout(() => {
        showResumeToast.downloadError();
      }, 2000);
    }
  };

  useEffect(() => {
    // Refresh date periodically so experience stays current even without page reload.
    const timer = setInterval(
      () => {
        setToday(new Date());
      },
      60 * 60 * 1000,
    );

    return () => clearInterval(timer);
  }, []);

  const calculateExperience = (currentDate) => {
    const start = new Date("2026-01-21");
    let months =
      (currentDate.getFullYear() - start.getFullYear()) * 12 +
      (currentDate.getMonth() - start.getMonth());

    // If the current day is before the start day, the current month is not complete yet.
    if (currentDate.getDate() < start.getDate()) {
      months -= 1;
    }

    const safeMonths = Math.max(0, months);

    if (safeMonths < 12) {
      return {
        value: safeMonths,
        statLabel: "Months Experience",
        unit: "MON",
      };
    }

    return {
      value: (safeMonths / 12).toFixed(1),
      statLabel: "Yrs Experience",
      unit: "YRS",
    };
  };
  const exp = useMemo(() => calculateExperience(today), [today]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <div id="about" style={{ display: "block", height: 0 }} />
      <section className="hero-wrap">
        <div className="hero-grid">
          {/* ── Left: Text ── */}
          <motion.div
            className="hero-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            style={{ opacity: 1, transform: "none", animation: "none" }} // Override old CSS classes
          >
            {/* <motion.div variants={itemVariants} className="status-pill">
              <span className="status-dot" />
              Available for work
            </motion.div> */}

            <motion.h1 variants={itemVariants} className="hero-name">
              Hey, I'm{" "}
              <span className="hero-name-gradient">Mitesh Soni</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-role">
              <strong>Web Developer</strong> &amp; Aspiring Full stack Engineer
            </motion.p>

            <motion.div variants={itemVariants} className="hero-divider" />

            <motion.p variants={itemVariants} className="hero-desc">
              Web Developer at iNoid Solutions specializing in Express, MongoDB,
              React, and microservices, building scalable backend systems.
              <br />
              Led CABIK fullstack project to
              become a complete fullstack engineer.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-stats">
              <div className="stat-box">
                <div className="stat-val">{exp.value}+</div>
                <div className="stat-lbl">{exp.statLabel}</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">25+</div>
                <div className="stat-lbl">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">40+</div>
                <div className="stat-lbl">
                  Languages, Tools &amp; Frameworks
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-actions">
              <a
                href={RESUME_FILE_PATH}
                download={RESUME_FILE_NAME}
                onClick={handleResumeDownload}
                className="btn-primary"
              >
                Download Resume <Download size={16} strokeWidth={2.5} />
              </a>
              <a href="#projects" className="btn-outline">
                View Work <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hero-image-col"
            style={{ opacity: 1, transform: "none", animation: "none" }} // Override old CSS classes
          >
            <div className="img-frame">
              <div className="hero-img-mask">
                <img src={Profile} alt="Mitesh Soni" className="hero-img" />
              </div>
              <div className="exp-card">
                <div className="exp-num">
                  {exp.value}
                  <span>{exp.unit}</span>
                </div>
                <div className="exp-label">of experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
