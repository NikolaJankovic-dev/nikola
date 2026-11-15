import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { Button } from "./ui/button";

type SiteContextValue = {
  phase: number;
  setPhase: Dispatch<SetStateAction<number>>;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used inside SiteLayout.");
  }
  return context;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (nebulaRef.current) {
        nebulaRef.current.style.transform =
          `translate3d(${200 - event.clientX / 50}px, ${-event.clientY / 50}px, 0)`;
      }
      if (starsRef.current) {
        starsRef.current.style.transform =
          `translate3d(${event.clientX / 500}%, ${event.clientY / 500}%, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goToContact = () => {
    setPhase(4);
    setMenuOpen(false);
    void navigate({ to: "/" });
  };

  return (
    <SiteContext.Provider value={{ phase, setPhase }}>
      <div className={`site-shell ${isHome ? "site-shell-home" : "site-shell-page"}`}>
        <div
          aria-hidden="true"
          className="site-nebula"
          ref={nebulaRef}
          style={{ transform: "translate3d(200px, 0, 0)" }}
        />
        <div aria-hidden="true" className="site-stars" ref={starsRef} />
        <header className="site-header">
          {!isHome && (
            <Link
              to="/"
              onClick={() => setPhase(1)}
              aria-label="Back to home"
              className="back-link"
            >
              <ArrowLeft size={27} strokeWidth={1.6} />
            </Link>
          )}
          <Link
            to="/"
            onClick={() => setPhase(1)}
            className="site-logo"
            aria-label="Nikola - home"
          >
            Nikola
          </Link>

          <div className="header-actions">
            <div className="social-links">
              <a href="mailto:dzoni6usb@gmail.com" aria-label="Email Nikola">
                <Mail size={48} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={48} />
              </a>
              <a
                href="https://github.com/NikolaJankovic-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={48} />
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </Button>
          </div>

          <nav
            className={`menu-panel ${menuOpen ? "menu-panel-open" : ""}`}
            aria-hidden={!menuOpen}
            inert={!menuOpen}
          >
            <Link
              to="/"
              onClick={() => {
                setPhase(1);
                setMenuOpen(false);
              }}
            >
              HOME
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link to="/aboutme" onClick={() => setMenuOpen(false)}>
              ABOUT ME
            </Link>
            <button type="button" onClick={goToContact}>
              CONTACT
            </button>
            <div className="menu-socials">
              <a href="mailto:dzoni6usb@gmail.com" aria-label="Email Nikola">
                <Mail />
              </a>
              <a
                href="https://www.linkedin.com/in/nikola-jankovic-bbb7a9220/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/NikolaJankovic-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </SiteContext.Provider>
  );
}
