import { useState } from "react";

const colors = [
  { name: "blue", blade: "saber-blue" },
  { name: "red", blade: "saber-red" },
  { name: "green", blade: "saber-green" },
  { name: "yellow", blade: "saber-yellow" },
];

export function Lightsaber() {
  const [colorIndex, setColorIndex] = useState(0);
  const color = colors[colorIndex]!;

  return (
    <div className="lightsaber" aria-label="Lightsaber. Click the hilt to change its color.">
      <span className={`saber-blade ${color.blade}`} />
      <span className="saber-generator">
        <span className="saber-guard">
          <span /><span /><span /><span />
        </span>
        <span className="saber-handle">
          {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
        </span>
        <span className="saber-wings"><i /><i /><i /></span>
        <button
          type="button"
          className="saber-toggle"
          onClick={() => setColorIndex((current) => (current + 1) % colors.length)}
          aria-label={`Change lightsaber color. Current color: ${color.name}`}
          title="Change lightsaber color"
        />
      </span>
    </div>
  );
}
