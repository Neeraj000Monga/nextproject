import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "../assets/CompanyLogo.svg";

const NavBar = () => {
  return (
    <nav className="flex fixed w-full bg-black z-20 justify-around items-center py-4 px-0">
      <div className="flex gap-7 text-white font-medium">
        <Link href="/Contact">CONTACT</Link>
        <Link href="/Projects">PROJECTS</Link>
        <Link href="/Products">PRODUCTS</Link>
        <Link href="/Careers">CAREERS</Link>
      </div>
      {/* Company Nav Logo */}
      <div className="bg-white">
        <Image src={CompanyLogo} alt="Company Logo" width={55} height={55} />
      </div>
    </nav>
  );
};

export default NavBar;
