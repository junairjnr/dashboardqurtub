import Image from "next/image";
import Sidebar from "../components/SideBar";
import { LogOut } from "lucide-react";
import Navbar from "../components/Navbar";
import Application from "../application/page";

export default function Dashboard() {
  return (
    <div className="w-full h-auto ">
      <Navbar />
      <div className="w-full h-full flex flex-row">
        <div className="w-[250px] h-screen ">
            <Sidebar />
        </div>
        <div className="w-full h-screen bg-blue-50">
            <Application />
        </div>
      </div>
    </div>
  );
}
