import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function VisitorPassView() {
    const [visitor,setVisitor] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3002/visitor/details/'+id).then((res) => {
            console.log(res);
            setVisitor(res.data);
        }).catch((err) => {
            // alert("error getting data")
            console.log(err);
        })
    },[])
  return (
    <main className="flex overflow-hidden flex-col pb-2 bg-slate-50 max-md:pb-24">
      <Header />
    <div className="flex flex-col flex-wrap self-center px-20 py-12 mt-6 mb-5 max-w-full text-base tracking-normal text-black bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:w-4/5 max-md:px-5">
      <h2 className="ml-3 text-3xl font-bold tracking-wide text-center text-purple-500 w-full">
        Visitor Pass Details
      </h2>
      <h5 className='ml-3 text-2xl font-bold tracking-wide text-center text-slate-600 w-full'>Pass ID : {visitor.uniqueCode}</h5>
      <div className='flex flex-col p-10 mt-2'>
            <label htmlFor="" className='text-xl font-bold text- text-slate-500 pb-2'>Visitor Name : {visitor.name}</label>
            <label htmlFor="" className='text-xl font-bold text- text-slate-500 pb-2'>Department : {visitor.department}</label>
            <label htmlFor="" className='text-xl font-bold text- text-slate-500 pb-2'>Purposeof Visit : {visitor.purposeOfVisit}</label>
            <label htmlFor="" className='text-xl font-bold text- text-slate-500 pb-2'>Status : {visitor.status}</label>
            {/* <label htmlFor="" className='text-xl font-bold text- text-slate-500'>ID Proof : jkgh</label> */}

      </div>
      <div className="flex gap-5 justify-between mt-7 max-w-full w-[281px]">
       
      </div>
      
    </div>
    </main>
  );
}

export default VisitorPassView;