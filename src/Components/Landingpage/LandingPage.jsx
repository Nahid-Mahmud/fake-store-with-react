import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div
        className="hero min-h-[89.3vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Welcome To Fake Store</h1>
            <p className="mb-5 font-medium text-white text-lg shadow-2xl">
            At Fake Store, we're not just a cloth store; we're a portal to a world of glamour, elegance, and limitless style possibilities. Step into our virtual boutique and prepare to embark on a sartorial adventure like no other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
