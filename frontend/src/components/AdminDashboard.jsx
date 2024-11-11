import React from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function AdminDashboard() {
    const interviewData = [
        {
          name: 'Mark Lio',
          department: 'IT',
          type: 'Interview',
          document: 'Aadhar',
          status: 'Checked In'
        },
        {
          name: 'Leo Stanton',
          department: 'Electronics',
          type: 'Meeting',
          document: 'Pan Card',
          status: 'Approved'
        }
      ];
      const location = useLocation(); 
      // console.log(location.state.user)
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      {/* <header className="flex flex-wrap gap-5 justify-between py-4 pr-20 pl-6 w-full font-bold text-center bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 text-3xl tracking-wide text-black">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26c8f8f66b498ca15f03b38e0702f93f5adc24973319d21dd5822cd8ac844bb?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 rounded-full aspect-square w-[70px]" />
          <h1 className="flex-auto my-auto">
            VMS
          </h1>
        </div>
        <button className="px-10 pt-2.5 pb-4 my-auto text-sm text-white whitespace-nowrap bg-red-500 rounded-xl max-md:px-5">
          Logout
        </button>
      </header> */}
      <Header/>
      <div className="w-full max-w-[1385px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col h-full bg-wh">
          <Sidebar user={"admin"}/>
          <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-10 w-full max-md:mt-10 max-md:max-w-full">
              <div className="self-center max-w-full w-[887px]">
                <div className="flex gap-5 max-md:flex-col">
                  {[
                    { title: "Total Visitors", count: 100 },
                    { title: "Monthly Visitors", count: 100 },
                    { title: "Daily Visitors", count: 10 }
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start pt-4 pr-14 pb-8 pl-7 w-full font-bold bg-white rounded-md border-2 border-solid border-slate-100 shadow-[0px_20px_50px_rgba(220,224,249,0.5)] max-md:px-5 max-md:mt-7">
                        <h2 className="text-lg tracking-normal text-neutral-700">{stat.title}</h2>
                        <p className="mt-8 text-3xl tracking-wide text-neutral-800">{stat.count}</p>
                        <p className="mt-4 text-sm tracking-normal text-neutral-400">Visitors</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <section className="mt-4 mb-0 ml-6 max-w-full w-[860px] max-md:mb-2.5"> */}
      {/* <h1 className="sr-only">Interview Schedule</h1> */}
      <section className="flex flex-col items-start px-11 pt-9 pb-40 mt-7 w-full bg-white rounded-md border-2 border-solid border-slate-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col self-stretch w-full font-bold text-center max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between items-start self-end max-w-full w-[932px]">
              <h2 className="text-2xl tracking-wide text-black">Today's Visitor Details</h2>
              <button className="flex gap-2.5 justify-center items-center px-2.5 py-5 mt-1.5 text-sm tracking-normal text-blue-900 rounded-xl bg-neutral-100 min-h-[59px]">
                Filter & Short
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ce8b2817157b757bae90550491d83565e607c4201ac5ccad3617078fdeb2ee?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              </button>
            </div>
          </div>
      <table className="w-full mt-12 text-sm font-bold tracking-normal text-black">
        <thead className='border-b border-solid border-zinc-300'>
          <tr>
            <th className="text-left py-4">Name</th>
            <th className="text-left py-4">Department</th>
            <th className="text-left py-4">Type</th>
            <th className="text-left py-4">Document</th>
            <th className="text-left py-4">Status</th>
          </tr>
        </thead>
        {/* <div className='w-full'>
            <hr className="shrink-0 mt-4 h-0 border border-solid border-zinc-100 max-md:mt-10 max-md:w-full" /></div> */}
        <tbody>
          {interviewData.map((interview, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-4">{interview.name}</td>
              <td className="py-4">{interview.department}</td>
              <td className="py-4">{interview.type}</td>
              <td className="py-4">{interview.document}</td>
              <td className="py-4">
                <span
                  className={`inline-block px-2 py-1 rounded ${
                    interview.status === 'Checked In' ? 'bg-teal-500 w-fit' : 'bg-zinc-400'
                  } bg-opacity-20 w-[81px] text-center`}
                >
                  {interview.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;