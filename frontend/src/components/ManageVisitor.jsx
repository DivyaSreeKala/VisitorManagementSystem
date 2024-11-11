import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const visitorData = [
  {
    name: "Mark Lio",
    department: "IT",
    purpose: "Interview",
    idProof: "Aadhar",
    status: "Checked In",
  },
  {
    name: "Leo Stanton",
    department: "Electronics",
    purpose: "Meeting",
    idProof: "Pan Card",
    status: "Approved",
  },
];

function ManageVisitor() {
  const [visitors, setVisitors] = useState(visitorData);

  const handleFilterSort = () => {
    // Implement filter and sort functionality
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedVisitors = [...visitors];
    updatedVisitors[index].status = newStatus;
    setVisitors(updatedVisitors);
  };

  const handleDelete = (index) => {
    const updatedVisitors = visitors.filter((_, i) => i !== index);
    setVisitors(updatedVisitors);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <Header />
      <div className="w-full max-w-[1391px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <section className="flex flex-col px-11 pt-9 pb-36 mx-auto mt-20 w-full font-bold bg-white rounded-md border-2 border-solid border-slate-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-start self-end max-w-full text-center w-[932px]">
                <h2 className="text-2xl tracking-wide text-black">Visitor Details</h2>
                <button
                  onClick={handleFilterSort}
                  className="flex gap-2.5 justify-center items-center px-2.5 py-5 mt-1.5 text-sm tracking-normal text-blue-900 rounded-xl bg-neutral-100 min-h-[59px]"
                >
                  <span className="self-stretch my-auto">Filter & Sort</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c5bb4b9b1d526023b9e2da708c8b219c5ddeac2d6a71e7bd04d6cbc505803c?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                </button>
              </div>
              <div className="flex flex-wrap gap-5 justify-between ml-16 max-w-full text-sm tracking-normal text-center text-black w-[560px]">
                <button className="px-8 py-3.5 bg-neutral-100 max-md:pl-5">Department V</button>
                <button className="px-11 pt-3 pb-4 bg-neutral-100 max-md:px-5">Status V</button>
                <button className="px-8 py-3.5 bg-neutral-100 max-md:pl-5">Department V</button>
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <table className="w-full text-sm tracking-normal text-black">
                  <thead>
                    <tr className="text-neutral-400">
                      <th className="text-left">Visitors Name</th>
                      <th className="text-left">Department</th>
                      <th className="text-left">Purpose</th>
                      <th className="text-left">ID Proof</th>
                      <th className="text-left">Status</th>
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitors.map((visitor, index) => (
                      <tr key={index} className="border-t border-zinc-100">
                        <td className="py-4">{visitor.name}</td>
                        <td>{visitor.department}</td>
                        <td>{visitor.purpose}</td>
                        <td>{visitor.idProof}</td>
                        <td>
                          <span
                            className={`inline-block px-2 py-1 text-center rounded ${
                              visitor.status === "Checked In" ? "bg-teal-500 bg-opacity-20" : "bg-zinc-400 bg-opacity-20"
                            }`}
                          >
                            {visitor.status}
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-1.5">
                            <button className="px-4 py-1 rounded bg-teal-500 bg-opacity-20">View</button>
                            <button
                              onClick={() => handleStatusChange(index, visitor.status === "Checked In" ? "Approved" : "Checked In")}
                              className="px-4 py-1 rounded bg-teal-500 bg-opacity-20"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(index)}
                              className="px-4 py-1 rounded bg-teal-500 bg-opacity-20"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ManageVisitor;