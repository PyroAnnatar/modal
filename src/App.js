import React from "react";
import Button from "./app/components/Button";

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#DE303F] flex justify-center items-center px-4">
      <div className="bg-white md:w-4/5 lg:w-3/6 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.5)] flex flex-col justify-center gap-8  p-16">
        <h1 className="font-bold text-4xl text-center">Delete User</h1>
        <p className=" text-3xl text-center">
          Are you sure you want to delete{" "}
          <span className="font-bold">your account?</span>
        </p>

        <div className="bg-[#FFE9D9] border-l-[10px] border-[#FA703F] p-4">
          <div className="flex text-3xl font-semibold items-center text-[#771505] mb-2">
            <img src="/Vector.png" alt="Warning symbol" />
            <h2 className="ml-2 text-2xl">Warning</h2>
          </div>

          <p className="text-xl text-[#BC4C2E] font-medium">
            By deleting this account, you won't be able to access the system.
          </p>
        </div>
        <div className="flex justify-between">
          <Button
            stuff={`text-3xl border-2 p-4 bg-[#101F20] text-white font-[500] hover:bg-white hover:text-[#101F20] hover:border-[#101F20]`}
          >
            No, Cancel
          </Button>
          <Button
            stuff={`text-3xl py-5 px-4 border-2 border-[#000000] font-[500] hover:bg-[#101F20] hover:text-white hover:border-white`}
          >
            Yes, Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
