import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

function TechnologySection() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="technologies"
      className="mx-auto mt-[112px] max-w-[1280px] px-4 pb-32 md:px-8"
    >
      {/* Section Title */}
      <div>
        <h2 className="text-[32px] font-extrabold leading-10 tracking-[-0.9px] text-[#0F172A] md:text-[36px]">
          Explore the{" "}
          <span className="gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-base leading-6 text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-3">
            <StackPanel />
          </div>

        </div>
      )}
    </section>
  );
}

export default TechnologySection;