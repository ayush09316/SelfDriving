import Image from 'next/image'

interface AdminInfoProp {
  icon: string;
  label: string;
  info: string;
  style?:string;
}

const AdminCard = ({label,icon,info}:AdminInfoProp) => {
  return (
    <div className="bg-white flex flex-col sm:flex-row gap-8 justify-center items-center w-full min-w-[100px] max-h-32  p-2  border-2 rounded-[10px] shadow-xl">

    <div className="flex flex-col  items-center sm:px-4 gap-1">
      <div className="flex justify-center items-center relative w-[88px] h-[88px]  rounded-full border-2">
        <div className="w-[78px] h-[78px] rounded-full bg-slate-400 flex p-4 justify-center items-center">
          <Image src={icon} alt="logo" width={60} height={60}   />
        </div>
      </div>
      <span className="text-sm font-medium ">{label}</span>
    </div>
  
    <span className=" font-[600] border-2 rounded-[10px] p-2 text-md">{info}</span>
  
  </div>
  
  )
}

export default AdminCard
