import React from 'react';

function Sidebar({user}) {
  return (
    <nav className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow items-start px-14 pt-7 text-xl tracking-normal text-black rounded-none aspect-[0.296] pb-[620px] max-md:px-5 max-md:pb-24 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b11d99b0ff4c4fb19fbd9324c9b8b9787a817e76a067dc8d5ead7b010b871118?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="relative text-xl font-bold tracking-wide">
          Username
          <br />
          <span className="text-base">({user})</span>
        </div>
        <a href="#dashboard" className="relative mt-16 max-md:mt-10">Dashboard</a>
        <a href="#manage-visitor" className="relative mt-16 max-md:mt-10">Manage Visitor</a>
        <a href="#manage-security" className="relative self-stretch mt-16 max-md:mt-10">Manage Security</a>
      </div>
    </nav>
  );
}

export default Sidebar;