import Image from "next/image";
import Ellipse from "../assets/Ellipse.png";
import Magic from "../assets/MagicImage.png";
import Character from "../assets/CharacterImg.png";
import BrandingSlide from "@/components/BrandingSlide";
import BandingCardSlide from "@/components/BandingCardSlide";
import CustomButton from "@/components/custom/CustomButton";
// import Character from "../assets/Character.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <section id="section1">
        <div className="flex justify-center pt-14">
          <h1 className="text-white font-extrabold leading-none text-[4rem] text-center">
            <span className="flex" style={{ letterSpacing: "6px" }}>
              <p
                className="text-[1.8rem] pt-12 font-cursive text-[#AB87FF]"
                style={{
                  transform: "rotate(325deg)",
                  letterSpacing: "0.1em",
                }}
              >
                We are
              </p>
              TECH-SAVVY PALS,
              <br />
              ALWAYS READY TO
              <br />
            </span>
            <span>
              <span className="text-[#AB87FF] ">SPRINKLE</span>
              <span className=" py-0 px-6">A BIT OF</span>
              <span className="text-[#AB87FF]">MAGIC</span>
            </span>
          </h1>
        </div>
      </section>
      <section id="section2">
        <div className="flex flex-col items-center">
          <Image
            src={Magic}
            alt="Magic Image"
            className=" lg:w-[420px] lg:h-[420px]"
          />
          <Image
            src={Ellipse}
            alt="Ellipse Image"
            className=" lg:w-[420px] lg:h-[80px]"
          />
        </div>
      </section>
      <section id="section3">
        <div className="flex">
          <div className=" flex flex-col gap-7 w-full pl-56 pt-7 text-white">
            <h1 className=" text-5xl lg:text-6xl font-bold">
              SOFTWARE DEVELOPMENT
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold">
              E-COMMERCE SOLUTIONS
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold">DEVOPS</h1>
            <h1 className="text-5xl lg:text-6xl font-bold">IAM</h1>
          </div>
          <div className="w-full">
            <Image
              src={Magic}
              alt="Magic Image"
              className=" lg:w-[420px] lg:h-[420px]"
            />
            <Image
              src={Ellipse}
              alt="Ellipse Image"
              className=" lg:w-[420px] lg:h-[80px]"
            />
          </div>
        </div>
      </section>
      <section id="section4">
        <div className="flex">
          <div className="flex flex-col text-white gap-7 w-full pl-56">
            <h1 className="text-5xl lg:text-6xl font-bold">
              MOBILE APP DEVELOPMENT
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold">
              DESKTOP APPLICATION DEVELOPMENT
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold">
              WEB APPLICATION DEVELOPMENT
            </h1>
          </div>
          <div className="w-full">
            <Image
              src={Magic}
              alt="Magic Image"
              className=" lg:w-[420px] lg:h-[420px]"
            />
            <Image
              src={Ellipse}
              alt="Ellipse Image"
              className=" lg:w-[420px] lg:h-[80px]"
            />
          </div>
        </div>
      </section>
      <section id="section5">
        <div className="snap-section relative h-[100vh] md:h-[550px] lg:min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-12 lg:px-24 xl:px-48">
          <Image
            src={Character}
            alt="Character"
            className="z-10  w-96 md:h-[350px] lg:h-[540px]"
          />
          <div className="relative flex flex-col h-[550px] md:h-[550px] lg:min-h-screen max-w-xl z-10">
            <div className="md:text-right flex flex-col justify-end md:justify-center items-start md:items-end w-full h-full">
              <div className="w-full flex flex-col ">
                <div className="bg-black text-white w-full flex justify-center items-center h-1/2 p-1">
                  <h1 className="text-5xl lg:text-6xl font-bold my-0">
                    TO CURATE THE ABOVE LIST, WE&apos;VE ASSEMBLED A
                  </h1>
                </div>
                <div className="text-black w-full flex justify-center items-center">
                  <h1 className="text-5xl lg:text-6xl font-bold my-0 p-1">
                    TEAM OF EXCEPTIONALLY SKILLED INDIVIDUALS
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-0 bottom-0 left-0 w-full h-1/2 bg-white" />
        </div>
      </section>
      <section id="section6">
        <div>
          <div className="flex justify-center pt-10">
            <h1 className="text-white font-extrabold leading-none text-[4rem] text-center">
              <span className="flex" style={{ letterSpacing: "6px" }}>
                <p
                  className="text-[1.8rem] pt-4 h-14 font-cursive text-[#AB87FF]"
                  style={{
                    transform: "rotate(310deg)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Our
                </p>
                <span className="text-[#AB87FF] ">CLIENTS</span>
                <span>SMILES</span>
                <span className="text-[#AB87FF]">AND</span>
              </span>
              <span>
                <span>PARTNERS</span>
                <span className="text-[#AB87FF] "> FNODS </span>
              </span>
              <span>!</span>
            </h1>
          </div>
          <div>
            <BandingCardSlide />
          </div>
        </div>
      </section>
      <section id="section7">
        <div>
          <BrandingSlide />
        </div>
      </section>
      <section id="section7">
        <div>
          <h1
            className="text-white font-extrabold leading-none text-[4rem] text-center"
            style={{ lineHeight: 1.2 }}
          >
            <span>
              LOCKED AND LOADED FOR <br />
            </span>
            <span className="text-[#AB87FF]">
              COLLABORATION? <br />
            </span>
            <span>
              LET&apos;S DEPLOY SOME TECH <br />
            </span>
            <span>
              MAGIC TOGETHER!
              <br />
            </span>
          </h1>
          <div className="flex justify-center pt-10 pb-11">
            <CustomButton />
          </div>
        </div>
      </section>
    </main>
  );
}
