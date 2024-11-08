import React from 'react';
import Sidebar from './Sidebar';

function SecurityDashboard() {
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
      
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <header className="flex flex-wrap gap-5 justify-between py-4 pr-20 pl-6 w-full font-bold text-center bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 text-3xl tracking-wide text-black">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26c8f8f66b498ca15f03b38e0702f93f5adc24973319d21dd5822cd8ac844bb?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 rounded-full aspect-square w-[70px]" />
          <h1 className="flex-auto my-auto">
            VMS
          </h1>
        </div>
        <button className="px-10 pt-2.5 pb-4 my-auto text-sm text-white whitespace-nowrap bg-red-500 rounded-xl max-md:px-5">
          Logout
        </button>
      </header>
      <div className="w-full max-w-[1385px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* <Sidebar user={"security"} /> */}

          <nav className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full bg-white">
      <div className="flex relative flex-col grow items-start px-14 pt-7 text-xl tracking-normal text-black rounded-none aspect-[0.296] pb-[620px] max-md:px-5 max-md:pb-24 max-md:mt-10">
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b11d99b0ff4c4fb19fbd9324c9b8b9787a817e76a067dc8d5ead7b010b871118?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-cover absolute inset-0 size-full" /> */}
        <div className="relative text-xl font-bold tracking-wide">
          {/* Username */}
          <br />
          <span className="text-base">security</span>
        </div>
        <a href="#dashboard" className="relative mt-16 max-md:mt-10">Dashboard</a>
        {/* <a href="#manage-visitor" className="relative mt-16 max-md:mt-10">Manage Visitor</a>
        <a href="#manage-security" className="relative self-stretch mt-16 max-md:mt-10">Manage Security</a> */}
      </div>
    </nav>

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
              <section className="mt-4 mb-0 ml-6 max-w-full w-[860px] max-md:mb-2.5">
      <h1 className="sr-only">Interview Schedule</h1>
      <table className="w-full text-sm font-bold tracking-normal text-black">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Department</th>
            <th className="text-left">Type</th>
            <th className="text-left">Document</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
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
                    interview.status === 'Checked In' ? 'bg-teal-500' : 'bg-zinc-400'
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

export default SecurityDashboard;