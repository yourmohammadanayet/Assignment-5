function TechnologyCard({ technology, onAdd, isAdded }) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  const badgeStyles = {
    Popular: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0EA5E9]",
    Versatile: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    Fast: "border-[#FFEDD5] bg-[#FFF7ED] text-[#EA580C]",
    Standard: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    "Top SQL": "border-[#DBEAFE] bg-[#EFF6FF] text-[#2563EB]",
    Cache: "border-[#FECACA] bg-[#FEF2F2] text-[#EF4444]",
    Ubiquitous: "border-[#FDE68A] bg-[#FFFBEB] text-[#D97706]",
    Essential: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0284C7]",
    Robust: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0284C7]",
    Modern: "border-[#CFFAFE] bg-[#ECFEFF] text-[#0891B2]",
    Containers: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0284C7]",
  };

  return (
    <div
      className={`flex min-h-[276px] flex-col justify-between rounded-2xl bg-white p-[21px] transition-all duration-200 ${
        isAdded
          ? "border border-[#F9A8D4] shadow-[0_2px_12px_-3px_rgba(219,39,119,0.18)]"
          : "border border-[#F1F5F9] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]"
      }`}
    >
      {/* Top Content */}
      <div>
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center">
            <img
              src={icon}
              alt={`${name} logo`}
              className="h-7 w-7 object-contain"
            />
          </div>

          {badge && (
            <span
              className={`rounded-full border px-[11px] py-[3px] text-[11px] font-semibold ${
                badgeStyles[badge] || badgeStyles.Popular
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        <h3 className="mt-[6px] text-[18px] font-bold leading-7 text-[#0F172A]">
          {name}
        </h3>

        <p className="mt-[2px] text-[12px] leading-[19.5px] text-[#64748B]">
          {description}
        </p>
      </div>

      {/* Bottom Content */}
      <div>
        <div className="flex items-center justify-between border-t border-[#F8FAFC] pt-[9px]">
          <span className="rounded bg-[#F1F5F9] px-2 py-[2px] text-[11px] font-medium text-[#475569]">
            {category}
          </span>

          <span className="text-[11px] font-medium text-[#64748B]">
            {difficulty}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-[12px] text-[#F59E0B]">
              ★
            </span>

            <span className="text-[11px] font-semibold text-[#334155]">
              {rating}
            </span>
          </div>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-lg py-[10px] text-[12px] font-semibold transition-all duration-200 ${
            isAdded
              ? "cursor-not-allowed border border-[#FBCFE8] bg-[#FDF2F8] text-[#DB2777]"
              : "bg-[#0A0F1D] text-white hover:bg-[#161D2D]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;