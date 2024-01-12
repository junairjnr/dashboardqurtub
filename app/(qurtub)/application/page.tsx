import { Panel } from "../components/Panel";

export default function Application() {
  return (
    <Panel className="h-screen">
      <div className="px-0 py-0 mt-10">
        <div className="w-full h-auto p-3 flex justify-between items-center">
          <p className="text-2xl font-bold">Application</p>
        </div>
        <table className="w-full h-auto border-2 mt-5 bg-gray-50 shadow-sm">
          <thead>
            <tr className="border">
              <th className="w-[100px] border">sl</th>
              <th className=" border">Name</th>
              <th className=" border">Name</th>
              <th className=" border">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
                <td className="border-r text-center">1</td>
                <td className="pl-4 border-r">Application-1</td>
                <td className="pl-4 border-r">Application-1</td>
                <td className="pl-4 border-r">Application-1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
