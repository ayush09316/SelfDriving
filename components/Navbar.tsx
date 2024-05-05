import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed py-4 top-0 flex justify-center opacity-100 z-[1000]">
      <div className="flex px-6 justify-between items-center h-16 mx-6 bg-white w-full rounded-3xl">
        <Link href={'/'} className="flex gap-6 items-center">
          <Image src={"logoImage.svg"} alt="logo" width={40} height={40} className="h-auto" />
          {/* <Image src={logo} alt="logo" width={40} height={20} /> */}
        </Link>
        <Link href={`/admin`} className="flex items-center">
          <Image src={"/admin.png"} alt="admin" width={35} height={35} className="h-auto" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
