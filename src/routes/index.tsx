import { createFileRoute } from "@tanstack/react-router";
import { HomeExperience } from "../components/home-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikola Jankovic | Frontend Developer" },
      {
        name: "description",
        content:
          "Explore the portfolio, projects, and work of Nikola Jankovic, frontend developer.",
      },
    ],
  }),
  component: HomeExperience,
});
