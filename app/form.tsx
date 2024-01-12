import Image from "next/image";
import logo from "../assets/logo-dark.png";

export default function RegistrationForm() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-full flex justify-center items-center bg-gray-200">
        <div className="w-[600px] h-full flex justify-center items-start bg-white rounded-md shadow-md flex-col">
          <div className="w-full h-[180px] flex flex-col justify-between items-center border-b p-2">
            <div className="w-full h-full flex flex-row justify-between items-center ">
              <Image alt="" src={logo} width={200} height={100} className="ml-5"/>
              <div className="flex flex-col">
                <div className="w-[110px] h-[100px] flex justify-center items-center border">
                  <input type="file" className="" />
                </div>
                <p className="p-1 text-center text-[12px]">upload Image</p>
              </div>
            </div>
            <p className="p-2 text-center ml-10 text-lg font-bold">
              Registration Form
            </p>
          </div>
          <div className="w-full h-full p-6">
            <div className="w-full h-auto p-2">
              <label className="pl-2 text-gray-700">Name</label>
              <input className="w-full h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
            </div>
            <div className="w-full h-auto p-2 flex flex-row gap-4 justify-around items-center">
              <div className="flex flex-col">
                <label className="pl-2 text-gray-700">Date of Birth</label>
                <input className="w-[160px] h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="pl-2 text-gray-700">Adhar Card No.</label>
                <input className="w-[160px] h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="pl-2 text-gray-700">Mobile No. 1</label>
                <input className="w-[160px] h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <div className="w-full h-auto p-2 flex flex-row gap-2  justify-around items-center">
              <div className="flex flex-col">
                <label className="pl-2 text-gray-700">Name of Father</label>
                <input className="w-[350px] h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="pl-2 text-gray-700">Mobile No. 2</label>
                <input className="w-[160px] h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <p className="text-lg font-bold p-2 mt-3">Address</p>
            <div className="w-full h-auto p-2 flex flex-row gap-2  justify-around items-center">
              <div className="w-[50%] flex flex-col">
                <label className="pl-2 text-gray-700">State</label>
                <input className=" h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="w-[50%] flex flex-col">
                <label className="pl-2 text-gray-700">District</label>
                <input className=" h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <div className="w-full h-auto p-2 flex flex-row gap-2  justify-around items-center">
              <div className="w-[50%] flex flex-col">
                <label className="pl-2 text-gray-700">Block</label>
                <input className=" h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="w-[50%] flex flex-col">
                <label className="pl-2 text-gray-700">Panchayat</label>
                <input className=" h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <div className="w-full h-auto p-2 flex flex-row gap-2  justify-around items-center">
              <div className="w-[50%] flex flex-col">
                <label className="pl-2 text-gray-700">Village</label>
                <input className=" h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="w-[50%] flex flex-col">
                <label className="pl-2 text-gray-700">PinCode</label>
                <input className=" h-[40px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <div className="w-full h-auto p-2 flex flex-col gap-2  justify-around items-center">
              <div className="w-full flex flex-row">
                <label className="pl-2 text-black w-[200px] font-bold text-[14px]">
                  IDENTIFICATION MARKS
                </label>
                <input className=" h-[40px] w-full p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="w-full flex flex-row">
                <label className="pl-2  w-[200px] font-bold text-gray-600 text-[10px]">
                  write two identification marks of student on body
                </label>
                <input className=" h-[40px] w-full p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <p className="text-lg font-bold p-2 mt-3">GENERAL DETAILS</p>
            <div className="w-full h-auto p-2 flex flex-row gap-3  justify-around items-center">
              <div className="w-full flex flex-row justify-center items-center">
                <label className="pl-2 text-black font-semibold w-[180px] text-[14px]">
                  Did the Student Study in Hadiya Moral School?
                </label>
                <div className="flex justify-center items-center gap-5">
                  <div className="flex gap-2">
                    <label>Yes</label>
                    <input
                      type="radio"
                      className=" p-1 pl-2 outline-none border border-slate-400 rounded-md"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label>No</label>
                    <input
                      type="radio"
                      className=" p-1 pl-2 outline-none border border-slate-400 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-2">
                <label className="pl-2 font-semibold w-[150px]  text-[14px]">
                  How Many years the student studied there?
                </label>
                <input className=" h-[40px] w-[80px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
            </div>
            <div className="w-full h-auto p-2 flex flex-col gap-3  justify-around items-center">
              <div className="w-full flex flex-row  items-center">
                <label className="pl-2 text-black w-[350px] text-[14px]">
                  Did the Student Study in Hadiya Moral School?
                </label>
                <div className="flex justify-center items-center gap-5">
                  <div className="flex gap-2">
                    <label>Yes</label>
                    <input
                      type="radio"
                      className=" p-1 pl-2 outline-none border border-slate-400 rounded-md"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label>No</label>
                    <input
                      type="radio"
                      className=" p-1 pl-2 outline-none border border-slate-400 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-7">
                <div className="flex flex-col">
                  <label className="pl-2   text-[14px]">If "Yes" Name</label>
                  <input className=" h-[40px] w-[400px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
                </div>
                <div className="flex flex-col">
                  <label className="pl-2   text-[14px]">Class</label>
                  <input className=" h-[40px] w-[100px] p-1 pl-2 outline-none border border-slate-400 rounded-md" />
                </div>
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <label className="pl-2 w-[500px] text-[14px]">
                  If the student's brother applied for QAT `24-25`,Provide the
                  Adhar No.?
                </label>
                <input className=" h-[40px] w-full p-1 pl-2 outline-none border border-slate-400 rounded-md" />
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <p>
                  ------------------------------------------------------------------------
                </p>
              </div>
              <div className="w-full flex flex-row justify-center items-center gap-3">
                <label className="pl-2 w-[300px] text-[16px]">
                  I hereby declare that the above-mentioned information is
                  correct and true according to the best of my knowledge
                </label>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col">
                    <label className="pl-2  text-[10px]">
                      Signature of the student
                    </label>
                    <input className=" h-[80px] w-[150px]  p-1 pl-2 outline-none border border-slate-400 rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <label className="pl-2   text-[10px]">
                      Signature of the Guardian
                    </label>
                    <input className=" h-[80px] w-[150px]  p-1 pl-2 outline-none border border-slate-400 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
