import { NextPage } from "next";
import Image from "next/image";
import BillCard from "~/Components/BillCard";
import BillFeed from "~/Components/BillFeed";
import NavBar from "~/Components/NavBar";
import SideBar from "~/Components/SideBar";
import billnavlogo from "~/assets/billnavlogo.svg"; // Import the SVG image

const Home: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#000080] to-black items-center">

<Image width={500} height={500} src={billnavlogo} alt="Bill Navigator Logo" className="mb-6" />
      <div className="container mx-auto flex items-start sm:pr-4">
        <div className="w-1/8">
        <NavBar />
        </div>
        <div className="min-h-screen flex-grow w-4/8">
          <h2 className="text-3xl underline text-start text-white font-bold mb-4 ml-6">Latest Bill</h2>
          <div className="flex flex-col items-center justify-center">
           <BillFeed />
            {/* <BillCard /> */}
          </div>
        </div>
        <div className="w-2/8">
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default Home;
