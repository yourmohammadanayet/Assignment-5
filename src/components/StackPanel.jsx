function StackPanel() {
  return (
    <aside className="rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">

      <h3 className="text-[18px] font-bold text-[#0F172A]">
        Your Stack
      </h3>

      <p className="mt-1 text-[12px] text-[#94A3B8]">
        No technologies selected yet.
      </p>

      <div className="mt-4 flex min-h-[78px] items-center justify-center rounded-xl border border-dashed border-[#E2E8F0] px-4">
        <p className="text-center text-[12px] text-[#94A3B8]">
          Your stack is empty.
        </p>
      </div>

    </aside>
  );
}

export default StackPanel;