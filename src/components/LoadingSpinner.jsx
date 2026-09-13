function LoadingSpinner() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#D81B7E]"></div>

        <p className="text-sm text-[#64748B]">
          Loading technologies...
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;