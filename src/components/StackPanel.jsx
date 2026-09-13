function StackPanel({ selectedStack, onRemove, onRemoveAll }) {
  const selectedCount = selectedStack.length;

  return (
    <aside className="rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">

      {/* Heading */}
      <div className="border-b border-[#F1F5F9] pb-4">

        <h3 className="text-[18px] font-bold text-[#0F172A]">
          Your Stack
        </h3>

        <p className="mt-1 text-[12px] text-[#94A3B8]">
          {selectedCount === 0
            ? "No technologies selected yet."
            : `${selectedCount} ${
                selectedCount === 1
                  ? "Technology"
                  : "Technologies"
              } Selected`}
        </p>

      </div>

      {/* Empty State */}
      {selectedCount === 0 ? (
        <div className="mt-4 flex min-h-[78px] items-center justify-center rounded-xl border border-dashed border-[#E2E8F0] px-4">

          <p className="text-center text-[12px] text-[#94A3B8]">
            Your stack is empty.
          </p>

        </div>
      ) : (
        <div className="mt-4">

          {/* Selected Technologies */}
          <div className="space-y-3">

            {selectedStack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-[#F1F5F9] p-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-8 w-8 object-contain"
                  />

                  <div>

                    <h4 className="text-[13px] font-semibold text-[#0F172A]">
                      {technology.name}
                    </h4>

                    <p className="text-[11px] text-[#64748B]">
                      {technology.category}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-sm text-[#94A3B8] transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>

              </div>
            ))}

          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-[#E2E8F0] py-2.5 text-[12px] font-medium text-[#475569] transition hover:bg-slate-50"
          >
            Remove All
          </button>

        </div>
      )}

    </aside>
  );
}

export default StackPanel;