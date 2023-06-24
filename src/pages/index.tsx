import type { NextPage } from "next";
import Image from "next/image";
import BillFeed from "~/Components/BillFeed";
import NavBar from "~/Components/NavBar";
import SideBar from "~/Components/SideBar";


const Home: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#000080] to-black items-center">

<Image width={500} height={500} src="/images/billnavlogo.svg" alt="Bill Navigator Logo" className="mb-6" />
      <div className="container mx-auto flex flex-col items-start sm:pr-4">
        
        <NavBar />
       
        <div className="flex flex-row w-screen items-start">
          {/* <h2 className="text-2xl underline text-start text-white font-bold mb-4 ml-6">Latest Bill</h2> */}
          <div className="container flex flex-col items-center justify-center mx-4 w-3/4">
           <BillFeed />
          </div>
          <div className="w-1/4">
          <SideBar />
        </div>
        </div>
        
      </div>
    </main>
  );
};

export default Home;
