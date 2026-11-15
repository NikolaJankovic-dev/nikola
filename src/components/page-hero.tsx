import { Lightsaber } from "./lightsaber";

export function PageHero({ title, image }: { title: string; image: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-image" style={{ backgroundImage: `url("${image}")` }} aria-hidden="true" />
      <div className="page-hero-copy">
        <h1>{title}</h1>
        <Lightsaber />
      </div>
    </section>
  );
}
