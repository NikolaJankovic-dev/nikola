import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/aboutme")({
  head: () => ({
    meta: [
      { title: "About Me | Nikola Jankovic" },
      {
        name: "description",
        content: "Learn more about Nikola Jankovic, his passions, and skills.",
      },
    ],
  }),
  component: AboutPage,
});

const passions = [
  {
    title: "DESIGN",
    icon: "https://i.imgur.com/zcamAaD.png",
    text: 'I think design is like a "magic wand". If a service or product is magic to solve a problem, it is the role of design to act as an intermediary for the user to master it. I strive every day to create a "magic wand" that matches the user.',
  },
  {
    title: "TECHNOLOGY",
    icon: "https://i.imgur.com/0TakKSj.png",
    text: 'Technology has the power to change the lives of the world and individuals. Thor once said: "Your ancestors called it magic but you call it science. I come from a land where they are one and the same". I want to be a person who can always catch up with the latest technology and respond to changes. I think the mission of designers and engineers is to promote innovation.',
  },
  {
    title: "STORY",
    icon: "https://i.imgur.com/Tlm1ii8.png",
    text: "I assume that by now you figured out that I am a big science fiction fan. I like to see good visual effects, but for me, the story is the most important factor. Stories can get people's attention and make things easier to understand and remember.",
  },
];

const skills = [
  { name: "HTML", time: "1YEAR", score: 90, icon: "https://i.imgur.com/eTZqX0b.png" },
  { name: "CSS", time: "1YEAR", score: 90, icon: "https://i.imgur.com/YsgpKyx.png" },
  { name: "Sass", time: "1YEAR", score: 80, icon: "https://i.imgur.com/nSUe8pq.png" },
  {
    name: "Chakra UI",
    time: "1YEAR",
    score: 70,
    icon: "https://itelofilho.gallerycdn.vsassets.io/extensions/itelofilho/chakra-ui-cheatsheet/0.1.2/1602346378840/Microsoft.VisualStudio.Services.Icons.Default",
  },
  {
    name: "Material UI",
    time: "1YEAR",
    score: 70,
    icon: "https://vscodeshift.gallerycdn.vsassets.io/extensions/vscodeshift/material-ui-snippets/3.3.8/1632893578939/Microsoft.VisualStudio.Services.Icons.Default",
  },
  { name: "Javascript", time: "1YEAR", score: 90, icon: "https://i.imgur.com/2jR5Mwb.png" },
  { name: "React", time: "1YEAR", score: 80, icon: "https://i.imgur.com/0dE2uHj.png" },
  { name: "Node JS", time: "1YEAR", score: 70, icon: "https://i.imgur.com/1f2FD7y.png" },
  { name: "Typescript", time: "5MONTHS", score: 60, icon: "https://i.imgur.com/q90a3l5.png" },
  { name: "React Native", time: "3MONTHS", score: 50, icon: "https://i.imgur.com/5Q7Hjl1.png" },
];

function NumberedHeading({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

function AboutPage() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const element = skillsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSkillsVisible(entry?.isIntersecting ?? false),
      { rootMargin: "500px", threshold: 1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        title="About me"
        image="https://i.imgur.com/YX6ZAru.jpg"
      />
      <div className="about-page">
        <section className="about-section about-profile-section">
          <span className="section-number">01</span>
          <div className="about-intro">
            <h2 className="about-profile-title">WHO I AM</h2>
            <div className="about-copy">
              <div className="about-name">
                <h3>NIKOLA</h3>
                <p>JANKOVIC</p>
              </div>
              <p>
                Born in Belgrade in 1993. My career started in 2013. when I got a
                job as a salesman in the largest IT company in Serbia. During the
                pandemic, I started learning about programming and soon fell in
                love with it. I wanted to learn more, so I decided to take a part
                in a coding bootcamp course. I finished it with an advanced
                diploma.
              </p>
              <img src="https://i.imgur.com/GT1rUg9.jpg" alt="Nikola Jankovic" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <NumberedHeading number="2">PASSION</NumberedHeading>
          <div className="passion-grid">
            {passions.map((passion) => (
              <article key={passion.title} className="passion-card">
                <img src={passion.icon} alt="" loading="lazy" />
                <h3>{passion.title}</h3>
                <p>{passion.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section skills-section">
          <NumberedHeading number="3">SKILL SET</NumberedHeading>
          <div className="skills-grid" ref={skillsRef}>
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <img src={skill.icon} alt="" loading="lazy" />
                <div className="skill-content">
                  <div className="skill-meta">
                    <div className="skill-name">
                      <h3>{skill.name}</h3>
                      <span>{skill.time}</span>
                    </div>
                    <span>{skill.score}%</span>
                  </div>
                  <div
                    className="skill-track"
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.score}
                  >
                    <span style={{ width: skillsVisible ? `${skill.score}%` : "10%" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="about-footer">
          <a href="mailto:dzoni6usb@gmail.com">dzoni6usb@gmail.com</a>
        </footer>
      </div>
    </>
  );
}
