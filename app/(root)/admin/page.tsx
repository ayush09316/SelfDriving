import Image from "next/image";
import { AdminInfo, Info } from "@/constants";
import InfoCard from "@/components/InfoCard";
import AdminCard from "@/components/AdminCard";
import Graph from "@/components/Graph";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-28 rounded-3xl w-full pb-4 mx-4 max-w-[1440px]">
      <div className="bg-black col-span-2  md:col-span-3 relative rounded-3xl w-full flex justify-center max-h-[35rem]">
        <Image src={"/map.png"} alt="map" fill className="object-contain rounded-3xl" />
      </div>

      <div className="flex relative overflow-hidden flex-col items-center gap-6 col-span-2 md:col-span-1 rounded-3xl p-6 bg-white max-h-[35rem]">
        <Graph />
        <Graph />
        <Graph />
      </div>

      <div className="flex relative overflow-hidden flex-col items-center col-span-4 xl:col-span-3 rounded-3xl p-6 bg-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-[6rem] gap-y-4">
          {AdminInfo.map((item) => (
            <AdminCard key={item.label} icon={item.icon} label={item.label} info={item.info} />
          ))}
        </div>
      </div>

      <div className="flex relative overflow-hidden flex-col justify-evenly xl:col-span-1 col-span-4 gap-2 rounded-3xl p-6 bg-white max-h-[35rem]">
        <InfoCard icon={"/sunny_icon.png"} label={"Weather"} info={"19°C Partially Sunny"} />
        <InfoCard icon={"/traffic.svg"} label={"Traffic"} info={"Clear"} />
      </div>
    </div>
  );
};

export default Page;
