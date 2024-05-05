import Image from 'next/image'

interface InfoProp {
  icon: string;
  label: string;
  info: string;
  style?:string;
}

const InfoCard = ({label,icon,info}:InfoProp) => {
  return (
    <div className="bg-white  flex flex-col sm:flex-row sm:gap-1 justify-center lg:gap-5 items-center w-full min-w-[150px]  py-3 px-2  border-2 rounded-[10px] shadow-xl">

    <div className="flex flex-col  items-center sm:px-4 gap-1">
      <div className="flex justify-center items-center relative w-[108px] h-[108px] sm:w-[58px] sm:h-[58px] lg:w-[88px] lg:h-[88px] rounded-full border-2">
        <div className="w-[100px] h-[100px] sm:w-[50px] sm:h-[50px] lg:w-[80px] lg:h-[80px] rounded-full bg-slate-400 flex p-4 justify-center items-center">
          <Image src={icon} alt="logo" width={80} height={80}  />
        </div>
      </div>
      <span className="text-sm font-medium ">{label}</span>
    </div>
  
    <span className=" font-[600] border-2 rounded-[10px] p-2 text-sm lg:text-md">{info}</span>
  
  </div>
  
  )
}

export default InfoCard
