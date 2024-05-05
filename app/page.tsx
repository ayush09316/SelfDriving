import Image from "next/image";
import { Info } from "@/constants";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-0 rounded-3xl items-center w-full sm:mt-28 pb-4 mx-4 md:mx-1 lg:mx-15 max-w-full xl:max-w-[1440px]">
        <div className="flex relative overflow-hidden flex-col items-center gap-6  rounded-l-xl px-6 py-9 bg-white w-full xl:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-4">
            {Info.map((item) => (
              <InfoCard
                key={item.label}
                icon={item.icon}
                label={item.label}
                info={item.info}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-4">
            <InfoCard icon={"/sunny_icon.png"} label={"Weather"} info={"19°C Partially Sunny"} />
            <InfoCard icon={"/traffic.svg"} label={"Traffic"} info={"Clear"} />
          </div>
        </div>

        <div className="bg-black relative rounded-r-xl w-full xl:w-1/2 flex justify-center px-6 md:px-16 py-3.5">
          <Image src={"/map.png"} alt="map" width={400} height={400} />
        </div>
      </div>
    </>
  );
}
