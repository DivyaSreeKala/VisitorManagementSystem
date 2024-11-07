import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-5 py-2 w-full text-center bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 text-3xl tracking-wide text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26c8f8f66b498ca15f03b38e0702f93f5adc24973319d21dd5822cd8ac844bb?placeholderIfAbsent=true&apiKey=f0b359b98b7042c7a2d21f164b56e543"
          alt=""
          className="object-contain shrink-0 rounded-full aspect-square w-[60px]"
        />
        <h2 className="flex-auto my-auto">
          VMS
        </h2>
      </div>
      <nav>
        <a href="#login" className="my-auto text-sm text-white">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;