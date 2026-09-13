import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import LoadingSpinner from "./LoadingSpinner";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

function TechnologySection() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setSelectedStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  };

  const handleRemove = (id) => {
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <section
      id="technologies"
      className="mx-auto mt-[112px] max-w-[1280px] px-4 pb-32 md:px-8"
    >

      {/* Section Heading */}
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

      {/* Content */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-9 lg:grid-cols-3">

            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAddToStack}
                isAdded={selectedStack.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}

          </div>

          {/* Stack */}
          <div className="lg:col-span-3">

            <StackPanel
              selectedStack={selectedStack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>

        </div>
      )}

    </section>
  );
}

export default TechnologySection;