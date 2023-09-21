const CardSkeleton = () => {
  return (
    <div className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="animate-pulse flex flex-col gap-y-2">
        <div className="h-3 bg-slate-700 rounded"></div>
        <div className="h-3 bg-slate-700 rounded w-2/4 mb-1"></div>
        <div className="h-2 bg-slate-700 rounded "></div>
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
