import React from 'react';
import FormInput from './FormInput';
import Header from './Header';

function VisitorPassForm() {
  const formInputs = [
    { label: 'Enter full name', type: 'text', name: 'fullName' },
    { label: 'Enter phone number', type: 'tel', name: 'phoneNumber' },
    { label: 'Enter email', type: 'email', name: 'email' },
    { label: 'Enter purpose of visit', type: 'text', name: 'purposeOfVisit' },
    { label: 'Enter department', type: 'text', name: 'department' },
    { label: 'Enter ID type', type: 'text', name: 'idType' },
  ];

  return (
    <main className="flex overflow-hidden flex-col pb-2 bg-slate-50 max-md:pb-24">
      <Header />
    <form className="flex flex-col items-center self-center px-20 py-12 mt-6 mb-5 max-w-full text-base tracking-normal text-black bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[451px] max-md:px-5">
      <h2 className="ml-3 text-3xl font-bold tracking-wide text-center text-purple-500">
        Visitor Pass Form
      </h2>
      {formInputs.map((input, index) => (
        <FormInput key={index} {...input} />
      ))}
      <div className="flex gap-5 justify-between mt-7 max-w-full w-[281px]">
        <label htmlFor="idProofUpload" className="self-start">Upload ID proof</label>
        <input
          type="file"
          id="idProofUpload"
          className="sr-only"
          aria-label="Upload ID proof"
        />
        <button
          onClick={() => document.getElementById('idProofUpload').click()}
          className="px-7 pt-1.5 pb-3 whitespace-nowrap bg-neutral-100 max-md:px-5"
        >
          Upload
        </button>
      </div>
      <button type="submit" className="self-stretch px-11 pt-3 pb-5 mt-9 text-2xl font-bold tracking-wide text-center text-white whitespace-nowrap bg-purple-500 rounded-xl max-md:px-5">
        REGISTER
      </button>
    </form>
    </main>
  );
}

export default VisitorPassForm;