import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { LoaderProvider } from "./context/LoaderContext";

// Existing imports
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
// import { showSiteToast } from "./utils/toastUtils";

const SITE_NAME = "Mitesh Soni";
const SITE_URL = "https://miteshsoni.online";
const SITE_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
  "Mitesh Soni is a full stack developer portfolio featuring React, Node.js, TypeScript, and modern web projects.";

const PROJECT_SEO = {
  1: {
    title: "Cabik Marketplace",
    description:
      "Cabik Marketplace is a full-stack vehicle marketplace with customer browsing, dealer inventory management, financing, and order tracking.",
    keywords:
      "Cabik Marketplace, vehicle marketplace, full stack project, React, Node.js, TypeScript",
  },
  2: {
    title: "Ecommerce App",
    description:
      "An ecommerce interface focused on product discovery, minimal navigation, and fast content scannability.",
    keywords: "Ecommerce app, React ecommerce, UI design, portfolio project",
  },
  3: {
    title: "GoFood Ordering System",
    description:
      "A food ordering experience with practical onboarding, account flows, and a strong visual hierarchy.",
    keywords:
      "GoFood ordering system, MERN app, food ordering UI, React project",
  },
  4: {
    title: "BookStore Learning Platform",
    description:
      "A learning storefront with guided user journeys, search-led navigation, and clean dark theme readability.",
    keywords:
      "BookStore project, learning platform, React project, portfolio case study",
  },
  5: {
    title: "Spotify Clone",
    description:
      "A music streaming interface focused on browsing, listening, and content discovery with a Spotify-inspired layout.",
    keywords:
      "Spotify clone, music app, React UI, portfolio project, frontend case study",
  },
  6: {
    title: "Uber Clone",
    description:
      "A ride-share inspired authentication experience with modern UI patterns, clear actions, and responsive forms.",
    keywords:
      "Uber clone, authentication UI, React project, responsive design",
  },
} as const;

const upsertMetaTag = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let metaTag = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute(attribute, key);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute("content", content);
};

const upsertLinkTag = (rel: string, href: string) => {
  let linkTag = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!linkTag) {
    linkTag = document.createElement("link");
    linkTag.setAttribute("rel", rel);
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute("href", href);
};

const upsertJsonLd = (payload: Record<string, unknown>) => {
  const scriptId = "seo-json-ld";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const projectMatch = location.pathname.match(/^\/project-details\/(\d+)$/);
    const projectId = projectMatch ? Number(projectMatch[1]) : null;
    const projectMeta = projectId ? PROJECT_SEO[projectId as keyof typeof PROJECT_SEO] : null;

    const pageTitle = projectMeta
      ? `${projectMeta.title} | ${SITE_NAME}`
      : location.pathname === "/"
        ? `${SITE_NAME} | Full Stack Developer Portfolio`
        : `${SITE_NAME} | Portfolio`;

    const description = projectMeta
      ? projectMeta.description
      : location.pathname === "/"
        ? DEFAULT_DESCRIPTION
        : `${SITE_NAME}'s portfolio showcases full stack development work, project case studies, and contact details.`;

    const keywords = projectMeta
      ? projectMeta.keywords
      : "Mitesh Soni, full stack developer, React, Node.js, TypeScript, portfolio";

    const canonicalUrl = new URL(location.pathname, SITE_URL).href;

    document.title = pageTitle;
    upsertMetaTag("name", "description", description);
    upsertMetaTag("name", "keywords", keywords);
    upsertMetaTag("name", "author", SITE_NAME);
    upsertMetaTag("name", "robots", "index,follow,max-image-preview:large");
    upsertMetaTag("name", "theme-color", "#090b14");
    upsertMetaTag("property", "og:site_name", SITE_NAME);
    upsertMetaTag("property", "og:title", pageTitle);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag(
      "property",
      "og:type",
      location.pathname === "/" ? "website" : "article",
    );
    upsertMetaTag("property", "og:url", canonicalUrl);
    upsertMetaTag("property", "og:image", SITE_IMAGE);
    upsertMetaTag("property", "og:image:alt", `${SITE_NAME} portfolio preview`);
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", pageTitle);
    upsertMetaTag("name", "twitter:description", description);
    upsertMetaTag("name", "twitter:image", SITE_IMAGE);
    upsertLinkTag("canonical", canonicalUrl);

    const structuredData =
      location.pathname === "/"
        ? {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: SITE_NAME,
                jobTitle: "Full Stack Developer",
                url: SITE_URL,
                image: SITE_IMAGE,
                sameAs: [
                  "https://github.com/Mitesh-soni",
                  "https://www.linkedin.com/in/mitesh-soni-886824323/",
                ],
                knowsAbout: [
                  "React",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "Express",
                  "Frontend Development",
                ],
              },
              {
                "@type": "WebSite",
                name: SITE_NAME,
                url: SITE_URL,
                description: DEFAULT_DESCRIPTION,
              },
            ],
          }
        : {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            url: canonicalUrl,
            description,
            inLanguage: "en",
            about: {
              "@type": "Person",
              name: SITE_NAME,
              url: SITE_URL,
            },
          };

    upsertJsonLd(structuredData);
  }, [location.pathname]);

  return null;
};

// Footer Wrapper Component
const FooterWrapper = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.includes("/project-details");
  return (
    <>
      {!isProjectPage && <Contact />}
      <Footer />
    </>
  );
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // useEffect(() => {
  //   showSiteToast.welcome();
  // }, []);

  useEffect(() => {
    // ===== CUSTOM CURSOR (Desktop Only) =====
    // Check if device has fine pointer (mouse) - skip on touch devices
    const isTouchDevice = !window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    let cursor, cursorDot, animationId;

    if (!isTouchDevice) {
      cursor = document.createElement("div");
      cursor.id = "custom-cursor";
      cursorDot = document.createElement("div");
      cursorDot.id = "cursor-dot";
      document.body.appendChild(cursor);
      document.body.appendChild(cursorDot);

      let mouseX = 0,
        mouseY = 0;
      let cursorX = 0,
        cursorY = 0;
      let dotX = 0,
        dotY = 0;

      const moveCursor = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const animate = () => {
        // Smooth follow effect
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        dotX += (mouseX - dotX) * 0.4;
        dotY += (mouseY - dotY) * 0.4;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
        cursorDot.style.left = dotX + "px";
        cursorDot.style.top = dotY + "px";

        animationId = requestAnimationFrame(animate);
      };

      document.addEventListener("mousemove", moveCursor);
      document.addEventListener("mousedown", () =>
        cursor.classList.add("click"),
      );
      document.addEventListener("mouseup", () =>
        cursor.classList.remove("click"),
      );
      animate();
    }

    // ===== SCROLL PROGRESS BAR & SCROLL TO TOP BUTTON =====
    const progressBar = document.createElement("div");
    progressBar.id = "scroll-progress";
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";

      // Show scroll-to-top button after 300px
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", handleScroll);
      if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (cursorDot && cursorDot.parentNode)
        cursorDot.parentNode.removeChild(cursorDot);
      if (progressBar.parentNode)
        progressBar.parentNode.removeChild(progressBar);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <LoaderProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div>
          <SeoManager />
          <Header />

          <Routes>
            {/* Route 1: Home Page */}
            <Route
              path="/"
              element={
                <>
                  <div id="about-section">
                    <About />
                  </div>

                  <div id="experience-section">
                    <Experience />
                  </div>

                  <div id="project-section">
                    <Projects />
                  </div>

                  <div id="tools-section">
                    <Skills />
                  </div>
                </>
              }
            />

            {/* Route 2: Project Details Page */}
            <Route path="/project-details/:id" element={<ProjectDetails />} />
          </Routes>

          <FooterWrapper />

          {/* Scroll to Top Button */}
          <button
            className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>

          <Toaster
            position="top-center"
            gutter={10}
            toastOptions={{
              duration: 3500,
              style: {
                background: "#131020",
                color: "#f4f0ff",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                boxShadow: "0 14px 34px rgba(0, 0, 0, 0.35)",
              },
              success: {
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "#0b0f17",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#0b0f17",
                },
              },
            }}
          />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;
