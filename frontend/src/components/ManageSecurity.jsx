import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const securityData = [
  {
    name: "Mark Lio",
    email: "marklio@email.com",
    phone: "1234567890",
    idProof: "Aadhar",
    createdAt: "10-04-2024"
  },
  {
    name: "Leo Stanton",
    email: "leostanton@email.com",
    phone: "9876543210",
    idProof: "Pan Card",
    createdAt: "20-10-2024"
  }
];

function ManageSecurity() {
  const [activeTab, setActiveTab] = useState('manageSecurity');

  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <Header />
      <div className="w-full max-w-[1391px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
            <Sidebar/>
          {/* <nav className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-start px-14 pt-8 text-xl tracking-normal text-black rounded-none aspect-[0.297] pb-[620px] max-md:px-5 max-md:pb-24 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ce3e11665e4857a978534dbf4d71018a82eecbf2020ec9a45dcd72f2ad21e1?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-cover absolute inset-0 size-full" />
              <div className="relative text-xl font-bold tracking-wide">
                Username <br />
                <span className="text-base">(Admin)</span>
              </div>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`relative mt-16 max-md:mt-10 ${activeTab === 'dashboard' ? 'font-bold' : ''}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('manageVisitor')}
                className={`relative mt-16 max-md:mt-10 ${activeTab === 'manageVisitor' ? 'font-bold' : ''}`}
              >
                Manage Visitor
              </button>
              <button
                onClick={() => setActiveTab('manageSecurity')}
                className={`relative self-stretch mt-16 max-md:mt-10 ${activeTab === 'manageSecurity' ? 'font-bold' : ''}`}
              >
                Manage Security
              </button>
            </div>
          </nav> */}
          <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <section className="flex flex-col px-11 pt-9 pb-36 mx-auto mt-20 w-full bg-white rounded-md border-2 border-solid border-slate-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-start w-full text-2xl font-bold tracking-wide text-black max-md:max-w-full">
                <h2>Security Details</h2>
                <button className="gap-2.5 text-base self-stretch px-2.5 py-3 mt-1.5 w-50 text-center rounded-xl bg-neutral-100 ">
                  + Add New Security
                </button>
              </div>
              <div className="px-14 pt-3 pb-4 ml-16 max-w-full text-sm font-bold tracking-normal text-center text-black bg-neutral-100 w-[164px] max-md:px-5 max-md:ml-2.5">
                Date V
              </div>
              {/* <hr className="shrink-0 mt-12 h-0 border border-solid border-zinc-100 max-md:mt-10 max-md:max-w-full" /> */}
              <div className="mt-1 mr-5 ml-4 max-md:mr-2.5 max-md:max-w-full">
                {/* <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="grow max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col items-start text-sm font-bold tracking-normal text-black max-md:mt-7">
                             <div className="self-stretch text-neutral-400">Security Name</div>
                            {securityData.map((security, index) => (
                              <div key={index} className={index === 0 ? "mt-14 max-md:mt-10" : "mt-16 max-md:mt-10"}>
                                {security.name}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow text-sm font-bold tracking-normal text-black max-md:mt-7">
                            <div className="self-start text-neutral-400">Email ID</div>
                            {securityData.map((security, index) => (
                              <div key={index} className={index === 0 ? "mt-14 max-md:mt-10 max-md:mr-2" : "mt-12 max-md:mt-10"}>
                                {security.email}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[47%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col w-full text-sm font-bold tracking-normal text-black max-md:mt-7">
                            <div className="flex gap-6 text-neutral-400 max-md:mr-2">
                              <div className="grow shrink w-[91px]">Phone Number</div>
                              <div>ID Proof</div>
                            </div>
                            {securityData.map((security, index) => (
                              <div key={index} className={`flex gap-5 justify-between ${index === 0 ? "mt-14" : "mt-16"} max-md:mt-10`}>
                                <div>{security.phone}</div>
                                <div className="my-auto">{security.idProof}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-between font-bold text-black max-md:mt-10">
                      <div className="flex flex-col self-start text-sm tracking-normal">
                        <div className="self-start text-neutral-400">Created At</div>
                        {securityData.map((security, index) => (
                          <div key={index} className={index === 0 ? "mt-14 max-md:mt-10" : "mt-20 max-md:mt-10 max-md:mr-1.5"}>
                            {security.createdAt}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col text-sm tracking-normal">
                        <div className="self-start ml-7 text-sm tracking-normal text-neutral-400 max-md:ml-2.5">Action</div>
                        {securityData.map((_, index) => (
                          <div key={index} className="flex gap-1.5 mt-14 w-full text-center max-md:mt-10">
                            <button className="gap-2.5 self-stretch py-1 whitespace-nowrap rounded bg-teal-500 bg-opacity-20 w-[81px]">View</button>
                            <button className="gap-2.5 self-stretch py-1 rounded bg-teal-500 bg-opacity-20 w-[81px]">Edit</button>
                            <button className="gap-2.5 self-stretch py-1 rounded bg-teal-500 bg-opacity-20 w-[81px]">Delete</button>
                          </div>
                        ))}
                      </div>
                    </div> 
                  </div>
                </div> */}
                <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <table className="w-full text-sm tracking-normal text-black">
                  <thead>
                    <tr className="text-neutral-400">
                      <th className="text-left">Visitors Name</th>
                      <th className="text-left">Department</th>
                      <th className="text-left">Purpose</th>
                      <th className="text-left">ID Proof</th>
                      {/* <th className="text-left">Status</th> */}
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {securityData.map((visitor, index) => (
                      <tr key={index} className="border-t border-zinc-100">
                        <td className="py-4">{visitor.name}</td>
                        <td>{visitor.email}</td>
                        <td>{visitor.purpose}</td>
                        <td>{visitor.idProof}</td>
                        {/* <td>
                          <span
                            className={`inline-block px-2 py-1 text-center rounded ${
                              visitor.status === "Checked In" ? "bg-teal-500 bg-opacity-20" : "bg-zinc-400 bg-opacity-20"
                            }`}
                          >
                            {visitor.status}
                          </span>
                        </td> */}
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
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ManageSecurity;