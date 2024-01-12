import {
  AppWindow,
  BookOpenText,
  Calendar,
  PercentDiamond,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-[250px] h-full flex flex-col bg-gray-600">
      <div className="flex justify-center items-center mt-[50px] ">
        <ul className="flex gap-16 flex-col text-white ">
          <Link href={"/"}>
            <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
              <AppWindow /> Application
            </li>
          </Link>
          <Link href={"/users"}>
            <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
              <Users /> Users
            </li>
          </Link>
          <Link href={"/"}>
            <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
              <Calendar /> Academic Year
            </li>
          </Link>
          <Link href={"/"}>
            <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
              <BookOpenText /> Subjects
            </li>
          </Link>
          <Link href={"/"}>
            <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
              <PercentDiamond /> Marks
            </li>
          </Link>
          <Link href={"/"}>
            <li className=" cursor-pointer flex gap-3 hover:text-gray-400">
              <Settings /> Settings
            </li>
          </Link>
        </ul>
      </div>
      <div className=" justify-end items-end p-2 mt-[250px] ">
        <div className=" flex justify-center items-center flex-col gap-">
          <p className="text-[13px] text-white text-start">Powered By </p>
          <p className="text-xl text-white">
            <a target="blank" href="https://datastoneglobal.com/">
              DatastoneGlobal
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
