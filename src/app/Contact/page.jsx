import CustomInput from "@/components/custom/CustomInput";
import Footer from "@/components/Footer";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center gap-5 ">
      <h1 className="text-white font-extrabold leading-none text-[3.5rem] pt-14">
        LET&apos;S TEAM UP FOR
      </h1>
      <h1 className="text-[#AB87FF]  font-extrabold leading-none text-[3.5rem] pb-12">
        DIGITAL BRILLIANCE!
      </h1>

      <div className="w-full pb-6 max-w-[1000px]">
        <CustomInput />

        <div className="flex w-full justify-center py-12">
          <button
            className="font-medium text-black w-72 px-7 py-3 bg-[#AB87FF] text-[3.2rem] "
            style={{ borderRadius: "60px", lineHeight: 1.2 }}
          >
            COMMIT
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
