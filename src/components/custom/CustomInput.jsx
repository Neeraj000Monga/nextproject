import React from "react";

const CustomInput = () => {
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        name="name"
        placeholder="YOUR NAME?"
        className="bg-[#ab87ff26] text-#ced0ce border p-3 rounded  text-base w-full"
      />
      <input
        type="text"
        name="name"
        placeholder="YOUR EMAIL?"
        className="bg-[#ab87ff26] text-#ced0ce border p-3 rounded  text-base w-full"
      />
      <textarea
        type="text"
        name="name"
        placeholder="YOUR MESSAGE"
        className="bg-[#ab87ff26] text-#ced0ce border p-3 rounded  text-base w-full h-40"
      />
    </div>
  );
};

export default CustomInput;
