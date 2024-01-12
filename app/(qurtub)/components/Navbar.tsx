import { LogOut } from "lucide-react";
import Image from "next/image";
import logo from '../../assets/logo-dark.png'

export default function Navbar() {
  return (
    <div className="w-full h-full">
      <nav className="w-full h-[70px] flex justify-between items-center  border-b border-black">
        <Image alt="" src={logo} height={100} width={200} className="ml-5 cursor-pointer"/>
        <div className="w-[250px] h-full flex justify-between items-center p-2  mr-4 text-gray-800">
          <p className="cursor-pointer hover:text-gray-400">Welcom Admin</p>
          <p className="flex gap-3 cursor-pointer hover:text-gray-400">
            Log out <LogOut />
          </p>
        </div>
      </nav>
    </div>
  );
}
