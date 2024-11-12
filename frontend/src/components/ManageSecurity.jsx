import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';


function ManageSecurity() {
  const [activeTab, setActiveTab] = useState('manageSecurity');
  
const [securityData, setSecurityData] = useState([]);
useEffect(() => {
  const token = localStorage.getItem('token');
    axios.get('http://localhost:3002/security/',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
    
      setSecurityData(res.data);
    }).catch((err) => {
      console.log(err);
    })
},[])
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <Header />
      <div className="w-full max-w-[1391px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
            <Sidebar/>
          
          <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <section className="flex flex-col px-11 pt-9 pb-36 mx-auto mt-20 w-full bg-white rounded-md border-2 border-solid border-slate-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-start w-full text-2xl font-bold tracking-wide text-black max-md:max-w-full">
                <h2>Security Details</h2>
                <button className="gap-2.5 text-base self-stretch px-2.5 py-3 mt-1.5 w-50 text-center rounded-xl bg-neutral-100 ">
                  + Add New Security
                </button>
              </div>
              {/* <div className="px-14 pt-3 pb-4 ml-16 max-w-full text-sm font-bold tracking-normal text-center text-black bg-neutral-100 w-[164px] max-md:px-5 max-md:ml-2.5">
                Date  v
              </div> */}
              {/* <hr className="shrink-0 mt-12 h-0 border border-solid border-zinc-100 max-md:mt-10 max-md:max-w-full" /> */}
              <div className="mt-1 mr-5 ml-4 max-md:mr-2.5 max-md:max-w-full">
                
                <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <table className="w-full text-sm tracking-normal text-black">
                  <thead>
                    <tr className="text-neutral-400">
                      <th className="text-left">Visitors Name</th>
                      <th className="text-left">Email</th>
                      <th className="text-left">Phone No.</th>
                      <th className="text-left">Address</th>
                      {/* <th className="text-left">Status</th> */}
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {securityData.map((visitor, index) => (
                      <tr key={index} className="border-t border-zinc-100">
                        <td className="py-4">{visitor.fullName}</td>
                        <td>{visitor.email}</td>
                        <td>{visitor.phoneNo}</td>
                        <td>{visitor.address}</td>
                        
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