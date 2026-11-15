import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/page-hero";
import { ProjectCard } from "../components/project-card";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Nikola Jankovic" },
      {
        name: "description",
        content: "Selected frontend projects by Nikola Jankovic.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "RESET",
    description:
      "Reset is a voting platform. Users choose the biggest hit of 2021 in several categories. Reset was very popular on social media on December 2021 and January 2022.",
    image: "https://i.imgur.com/MGrBQ3U.png",
    logo: "https://i.imgur.com/2QhJiKO.png",
    imageClass: "project-phone",
    href: "https://reset-10ae0.web.app/",
  },
  {
    name: "BITSHOW",
    description: "Track your favorite TV shows with BitShow!",
    image: "https://i.imgur.com/BlbqyES.png",
    imageClass: "project-tv",
    href: "https://nikolatvmaze-850rvk16e-nikolajankovic-dev.vercel.app/index.html",
  },
  {
    name: "TEMBO",
    description:
      "Tembo is a travel agency. Explore Kenya, Egypt, or Tanzania with Tambo! More details coming soon.",
    image: "https://i.imgur.com/hOhjX7P.png",
    imageClass: "project-desk",
    href: undefined,
  },
  {
    name: "Job-Book",
    description:
      "Certification project at BIT. On this web app, you can track, create and delete candidates and interview reports.",
    image: "https://i.imgur.com/F52kFyp.png",
    imageClass: "project-laptop",
    href: undefined,
    jobBook: true,
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        image="https://wallpaperaccess.com/full/1949688.jpg"
      />
      <section
        id="projects"
        className="min-h-screen scroll-mt-24 bg-[#f0f8ff] px-5 py-20 text-slate-950 sm:px-10 lg:px-0 lg:py-28"
      >
        <div className="project-list mx-auto flex max-w-[880px] flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
