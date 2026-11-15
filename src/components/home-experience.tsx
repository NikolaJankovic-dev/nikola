import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ContactForm } from "./contact-form";
import { useSiteContext } from "./site-layout";
import { Lightsaber } from "./lightsaber";

const scenes = [
  { title: "Portfolio", subtitle: "Frontend Developer", image: "" },
  { title: "Projects", subtitle: "", image: "https://wallpaperaccess.com/full/1949688.jpg", link: "/projects" as const },
  { title: "About me", subtitle: "", image: "https://i.imgur.com/YX6ZAru.jpg", link: "/aboutme" as const },
  { title: "Contact me", subtitle: "", image: "https://i.imgur.com/dEot7B9.jpg" },
];

export function HomeExperience() {
  const { phase, setPhase } = useSiteContext();
  const lastChange = useRef(0);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest("input, textarea, select, [contenteditable=true]")
      ) {
        return;
      }
      event.preventDefault();
      const now = Date.now();
      if (Math.abs(event.deltaY) < 12 || now - lastChange.current < 750) return;
      lastChange.current = now;
      setPhase((current) => Math.min(4, Math.max(1, current + (event.deltaY > 0 ? 1 : -1))));
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest("button, a, input, textarea, select, [contenteditable=true]")
      ) {
        return;
      }
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        setPhase((current) => Math.min(4, current + 1));
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        setPhase((current) => Math.max(1, current - 1));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPhase]);

  const changePhase = (nextPhase: number) => {
    lastChange.current = Date.now();
    setPhase(Math.min(4, Math.max(1, nextPhase)));
  };

  return (
    <div
      className="home-experience"
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const end = event.changedTouches[0]?.clientY;
        touchStart.current = null;
        if (start === null || end === undefined || Math.abs(start - end) < 45) return;
        changePhase(phase + (start > end ? 1 : -1));
      }}
    >
      {scenes.map((scene, index) => {
        const sceneNumber = index + 1;
        const active = phase === sceneNumber;
        return (
          <section
            key={scene.title}
            className={`experience-scene experience-scene-${sceneNumber} ${active ? "scene-active" : ""}`}
            style={{
              transform: `translateY(${(sceneNumber - phase) * 100}vh)`,
              zIndex: active ? 2 : 1,
            }}
            aria-hidden={!active}
            inert={!active}
          >
            {scene.image && (
              <div
                className={`scene-image scene-image-${sceneNumber}`}
                style={{ backgroundImage: `url("${scene.image}")` }}
                aria-hidden="true"
              />
            )}
            {sceneNumber === 1 && <div className="death-star"><DeathStarPreview /></div>}
            <div className="scene-copy">
              <h1>{sceneNumber === 4 ? "CONTACT ME" : scene.title}</h1>
              {sceneNumber !== 4 && <Lightsaber />}
              {scene.subtitle && <p className="scene-subtitle">{scene.subtitle}</p>}
              {scene.link && (
                <Link to={scene.link} className="show-more">SHOW ME MORE</Link>
              )}
              {sceneNumber === 4 && <ContactForm />}
            </div>
          </section>
        );
      })}
      <aside className="phase-indicator" aria-label="Home sections">
        {scenes.map((scene, index) => (
          <button
            type="button"
            key={scene.title}
            onClick={() => changePhase(index + 1)}
            aria-label={`Go to ${scene.title} section`}
            aria-current={phase === index + 1 ? "step" : undefined}
            className={phase === index + 1 ? "phase-line phase-line-active" : "phase-line"}
          />
        ))}
      </aside>
    </div>
  );
}

function DeathStarPreview() {
  const [Scene, setScene] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    void import("./death-star-canvas").then((module) => setScene(() => module.default));
  }, []);

  return Scene ? (
    <Scene />
  ) : (
    <div className="star-preview" aria-label="Rotating Death Star model" role="img">
      <span />
    </div>
  );
}
