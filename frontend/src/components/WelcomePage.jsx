import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex overflow-hidden flex-col pb-24 bg-slate-50">
      <header className="flex flex-wrap gap-5 justify-between py-4 pr-20 pl-5 w-full font-bold text-center bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 text-xl tracking-widest text-black">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da6c34d8db291ad6adabef0affaada5fc171ed8a5ff63ce0b5053b452a9945d?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-contain shrink-0 rounded-full aspect-square w-[70px]" />
          <h1 className="flex-auto my-auto max-md:max-w-100 text-4xl">
            VMS
          </h1>
        </div>
        <button className="px-11 py-2.5 my-auto text-sm text-white whitespace-nowrap bg-orange-300 rounded-xl max-md:px-5" onClick={()=>navigate('/login')}>
          Login
        </button>
      </header>

      <section className="py-3.5 pr-3 pl-3 w-full bg-purple-500 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <h2 className="tracking-wide text-center max-md:max-w-full max-md:text-4xl">
                Welcome to our Visitor Management System
              </h2>
              <button className="self-end px-7 pt-4 pb-9 mt-20 max-w-full rounded-xl bg-neutral-700 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] tracking-[2.4px] w-[424px] max-md:px-5 max-md:mt-10 max-md:text-4xl"
              onClick={()=>navigate('/visitor-pass-registration')}>
                Get Entry Pass
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4a7e8279a4e9e1510975007f68dbafd921d92c6ce7e7a81e983e8f12c118f49?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="Visitor Management System illustration" className="object-contain grow w-full aspect-[1.45] rounded-[44px] max-md:mt-10 max-md:max-w-full" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-20 py-11 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col pt-7 pr-11 pb-24 pl-5 ml-6 w-full bg-white max-w-[1000px] max-md:px-5 max-md:max-w-full">
          <h2 className="text-5xl font-bold tracking-wide text-center text-indigo-500 max-md:text-4xl">
            About Us
          </h2>
          <p className="mt-14 text-2xl tracking-wide text-black max-md:mt-10 max-md:max-w-full">
            Welcome to the Visitor Management System (VMS)! <br />
            At VMS, our mission is to provide organizations with a seamless, secure,
             and efficient way to manage visitor access while enhancing the overall visitor experience.
              We understand the importance of safety and efficiency in today's fast-paced environments,
               and our innovative solution is designed to meet those needs.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-20 py-11 mt-24 w-full bg-sky-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col pt-7 pr-11 pb-24 pl-5 ml-6 w-full bg-white max-w-[1000px] max-md:px-5 max-md:max-w-full">
          <h2 className="self-center text-5xl font-bold tracking-wide text-center text-indigo-500 max-md:text-4xl">
            Our Technology
          </h2>
          <p className="mt-14 text-2xl tracking-wide text-black max-md:mt-10 max-md:max-w-full">
            Built on the robust MERN stack (MongoDB, Express.js, React.js, Node.js), our system is designed for scalability and performance. This modern technology stack allows us to deliver a responsive and reliable application that adapts to the needs of any organization.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WelcomePage;