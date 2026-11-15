import { useState, type MouseEvent } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

type Project = {
  name: string;
  description: string;
  image: string;
  logo?: string;
  imageClass: string;
  href?: string;
  jobBook?: boolean;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shadowOpacity, setShadowOpacity] = useState(0.3);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setRotation({ x: y * -5, y: x * 7 });
    setShadowOpacity(1);
  };

  const handlePointerLeave = () => {
    setRotation({ x: 0, y: 0 });
    setShadowOpacity(0);
  };

  const card = (
    <article
      className={`project-card project-card-${index + 1}`}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
    >
      <img
        className="device-frame"
        src="https://i.imgur.com/4dVUGm8.png"
        alt=""
        style={{
          transform: `translate3d(${rotation.y * 5}px, ${rotation.x}px, 0)`,
          opacity: shadowOpacity,
        }}
      />
      <div className="project-copy">
        {project.logo ? (
          <img className="project-logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />
        ) : (
          <h2 className="project-name">{project.name}</h2>
        )}
        <p>{project.description}</p>
      </div>
      <div className="project-art">
        <img className="noimg" src="https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f43b0ed916fd9db04a3eaa4_1231235f3fb3205e35062caf540258_5d3203df882ef3018f9f55f1_Level%204%20444.png" alt="" />
        <img className={project.imageClass} src={project.image} alt={`${project.name} project preview`} loading="lazy" />
      </div>
    </article>
  );

  if (project.jobBook) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="project-trigger" aria-label={`View ${project.name} details`}>
            {card}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Job-Book</DialogTitle>
          <p>
            To get access you will need to download and start the database (npm
            start). Login parameters:
            <br /> username - dev@dev.com
            <br /> password - developer.
          </p>
          <div className="dialog-actions">
            <Button asChild variant="outline">
              <a href="https://www.dropbox.com/s/ikerwc6edzu5aa3/interviews-reports-api-mock.zip?dl=0" target="_blank" rel="noreferrer">Download</a>
            </Button>
            <Button asChild>
              <a href="https://job-book.vercel.app/" target="_blank" rel="noreferrer">Visit</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className="project-trigger" aria-label={`Open ${project.name}`}>
        {card}
      </a>
    );
  }
  return <div className="project-trigger">{card}</div>;
}
