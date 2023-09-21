import CardSkeleton from "@/components/ui/card/card-skeleton";

const Loading = () => {
  return (
    <div className="mt-20 mx-10 grid grid-cols-4 gap-8">
      {new Array(12).fill('').map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
