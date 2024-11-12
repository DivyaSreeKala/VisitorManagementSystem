import React, { useState } from 'react';
import FormInput from './FormInput';
import Header from './Header';
import axios from 'axios';
import{ useNavigate } from 'react-router-dom'

function VisitorPassForm() {
  const formInputs = [
    { label: 'Enter full name', type: 'text', name: 'fullName' },
    { label: 'Enter phone number', type: 'number', name: 'phoneNo' },
    { label: 'Enter email', type: 'email', name: 'email' },
    { label: 'Enter address', type: 'text', name: 'address' },
    { label: 'Enter purpose of visit', type: 'text', name: 'purposeOfVisit' },
    { label: 'Enter department', type: 'text', name: 'department' },
    { label: 'Enter ID type', type: 'text', name: 'idType' },
  ];
  const navigate = useNavigate();
  const [visitor, setVisitor] = useState({
  fullName:'',
  email:'',
  phoneNo:0,
  address:'',
  department:'',
  purposeOfVisit:'',
  idType:'',
  idProof:null
 
  })

  const onInputChange = (e) => {

    if(e.target.type != 'file')
        setVisitor({...visitor, [e.target.name]:e.target.value});
    else 
        setVisitor({...visitor, [e.target.name]:e.target.files[0]});
  }
 
  const onSubmit = (e) => {
    e.preventDefault();
  
   const data = new FormData();
   data.append('fullName', visitor.fullName);
   data.append('email', visitor.email);
   data.append('phoneNo', visitor.phoneNo);
   data.append('address', visitor.address);
   data.append('department', visitor.department);
   data.append('purposeOfVisit', visitor.purposeOfVisit);
   data.append('idType', visitor.idType);

   if (visitor.idProof) {
       data.append('idProof', visitor.idProof); // Append file data if present
   }
 
  axios.post('http://localhost:3002/visitor/register',data).then((res) => {
    console.log(res);
    if(res.data) {
      alert("Request submitted successfully. An email will be sent upon approval. Thank you for your submission!");
      navigate('/')
    }
  }).catch((err) => {
    console.log(err);
    if(!err.response.data.success){
      alert(err.response.data.message)
    }
  })
  }
  return (
    <main className="flex overflow-hidden flex-col pb-2 bg-slate-50 max-md:pb-24">
      <Header />
    <form className="flex flex-col items-center self-center px-20 py-12 mt-6 mb-5 max-w-full text-base tracking-normal text-black bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[451px] max-md:px-5">
      <h2 className="ml-3 text-3xl font-bold tracking-wide text-center text-purple-500">
        Visitor Pass Form
      </h2>
      {formInputs.map((input, index) => (
        <FormInput key={index} {...input} value={visitor.name} onInputChange={onInputChange} />
      ))}
      <div className="flex gap-5 justify-between mt-7 max-w-full w-[281px]">
        <label htmlFor="idProofUpload" className="self-start">Upload ID proof</label>
        <input
          type="file"
          id="idProofUpload"
          className="sr-only"
          aria-label="Upload ID proof"
          name='idProof'
          onChange={onInputChange}
        />
            {visitor.idProof && <p className='text-base'>{visitor.idProof.name}</p>}
        <button
          onClick={(e) => {e.preventDefault();
            document.getElementById('idProofUpload').click();
          }}
          className="px-7 pt-1.5 pb-3 whitespace-nowrap bg-neutral-100 max-md:px-5"
          >
          Upload
        </button>
      </div>
      <button type="submit" onClick={onSubmit} className="self-stretch px-11 pt-3 pb-5 mt-9 text-2xl font-bold tracking-wide text-center text-white whitespace-nowrap bg-purple-500 rounded-xl max-md:px-5">
        REGISTER
      </button>
    </form>
    </main>
  );
}

export default VisitorPassForm;