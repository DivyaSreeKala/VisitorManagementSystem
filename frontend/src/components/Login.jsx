import React from 'react';
import Header from './Header';

const LoginForm = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-2 bg-slate-50 max-md:pb-24">
      <Header />
      <section className="flex flex-col self-center px-20 py-16 mt-10 ml-4 max-w-full text-base tracking-normal text-black bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[451px] max-md:px-5 max-md:mt-10">
        <h1 className="self-center text-5xl tracking-wide text-center text-purple-500 max-md:text-4xl font-bold">
          Login
        </h1>
        <form>
          <label htmlFor="username" className="sr-only">Enter username</label>
          <input
            id="username"
            type="text"
            className="px-4 pt-3.5 pb-3.5 mt-16 w-full rounded-xl bg-neutral-100 max-md:pr-5 max-md:mt-10"
            placeholder="Enter username"
          />
          <label htmlFor="password" className="sr-only">Enter password</label>
          <input
            id="password"
            type="password"
            className="px-4 pt-3.5 pb-3.5 mt-12 w-full rounded-xl bg-neutral-100 max-md:pr-5 max-md:mt-10"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="px-11 pt-4 pb-4 mt-16 text-2xl tracking-wide text-center text-white whitespace-nowrap bg-purple-500 rounded-xl w-full max-md:px-5 max-md:mt-10 "
          >
            Log In
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;