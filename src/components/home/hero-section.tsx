import Image from "next/image";
import Description from "./description";

const HeroSection = () => {
  return (
    <section>
      <div className="h-screen gap-20 grid place-content-center grid-cols-1 animate-fade-up md:grid-cols-12 ">
        <div className="col-span-7 ">
          <h1 className="text-4xl font-bold mb-4 md:text-6xl animate-fade-right">
            Hello, I'm Mart
          </h1>
          <Description />
        </div>
        <div className="col-span-5 md:mt-[-80px]">
          <div>
            <Image
              src="/images/programmer2.png"
              width={420}
              height={420}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
