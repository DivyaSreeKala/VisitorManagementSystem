import { React,useEffect,useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';


function securityDashboard() {
  const [uniqueCode, setUniqueCode] = useState('');
  const [visitors, setVisitors] = useState([]);

  useEffect(()=> {
    const token = localStorage.getItem('token');
      axios.get('http://localhost:3002/visitor/daily'
    //     ,{
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //   }
    //  }
    ).then((res) => {
        console.log(res.data)
        setVisitors(res.data)
      }).catch((err) => {
        console.log(err)
      })
  },[])

  const handleVerify = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log('Verifying code:', uniqueCode);

   
    axios.get('http://localhost:3002/visitor/verify-token/'+uniqueCode
    //   ,{
    //   headers: {
    //     Authorization:`Bearer ${token}`
    //   }
    // }
  ).then((res) => {
    if(res.data[0].fullName){
      alert("Allowed");
    }
    // }else{
    //   alert("Not allowed")
    // }
    console.group(res)
    }).catch((err) => {
      alert("error in validation")
      // console.log(err)
    })
  };

  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <Header />
      <main className="flex gap-5 w-full max-md:max-w-full">
        <Sidebar/>
      

        <section className="flex flex-row ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-6 max-md:mt-10 max-md:max-w-full">
        <form onSubmit={handleVerify} className="flex flex-col items-center self-center px-20 pt-16 pb-32 ml-7 max-w-full bg-white rounded-md w-[808px] max-md:px-5 max-md:pb-24">
          <div className="flex flex-col -mb-6 max-w-full w-[364px] max-md:mb-2.5">
            <label htmlFor="uniqueCode" className="sr-only">Enter the unique code</label>
            <input
              id="uniqueCode"
              type="text"
              value={uniqueCode}
              onChange={(e) => setUniqueCode(e.target.value)}
              className="px-6 pt-1.5 pb-3 text-base tracking-normal text-black rounded-lg bg-neutral-200 max-md:px-5"
              placeholder="Enter the unique code"
            />
            <button
              type="button"
              onClick={handleVerify}
              className="self-center px-9 py-3 mt-10 max-w-full text-sm font-bold text-center text-white whitespace-nowrap bg-green-500 rounded-xl w-[123px] max-md:px-5 max-md:mt-10"
            >
              Verify
            </button>
          </div>
        </form>
        <section className="flex flex-col items-start px-11 pt-9 pb-40 mt-7 w-full bg-white rounded-md border-2 border-solid border-slate-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col self-stretch w-full font-bold text-center max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between items-start self-end max-w-full w-[932px]">
              <h2 className="text-2xl tracking-wide text-black">Today's Visitor Details</h2>
              <button className="flex gap-2.5 justify-center items-center px-2.5 py-5 mt-1.5 text-sm tracking-normal text-blue-900 rounded-xl bg-neutral-100 min-h-[59px]">
                Filter & Short
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ce8b2817157b757bae90550491d83565e607c4201ac5ccad3617078fdeb2ee?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              </button>
            </div>
            <hr className="shrink-0 mt-24 h-0 border border-solid border-zinc-100 max-md:mt-10 max-md:max-w-full" />
          </div>
          
            {/* <div key={index} className="flex flex-wrap justify-between w-full mt-4 text-sm tracking-normal"> */}
            <table className="w-full text-sm font-bold tracking-normal text-black">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Department</th>
            <th className="text-left">Purpose</th>
          
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-4">{visitor.fullName}</td>
              <td className="py-4">{visitor.department}</td>
              <td className="py-4">{visitor.purposeOfVisit}</td>
             

              <td className="py-4">
                <span
                  className={`inline-block px-2 py-1 rounded ${
                    visitor.status === 'Checked In' ? 'bg-teal-500' : 'bg-zinc-400'
                  } bg-opacity-20 w-[81px] text-center`}
                >
                  {visitor.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            {/* </div> */}
          {/* ))} */}
        </section>
      </div>
    </section>
      </main>
    </div>
  );
}

export default securityDashboard;