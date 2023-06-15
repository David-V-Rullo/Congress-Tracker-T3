import { type NextPage } from "next";
import BillCard from "~/Components/BillCard";
import NavBar from "~/Components/NavBar";
// import { api } from "~/utils/api";
// import { useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  // const user = useUser();
  // const { data } = api.posts.getAll.useQuery();
  return (
    <>
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#000080] to-[#000000]">
        <h1 className="flex items-center justify-center h-1/4 text-center text-5xl font-gotham font-extrabold tracking-tight text-white sm:text-[5rem] mt-5 mb-5">
          Congress Tracker
        </h1>
        <div className="container mx-auto flex items-start sm:pr-4"> 
         <NavBar />
          <div className="min-h-screen flex-grow">
          
          <h2 className="text-3xl underline text-center font-bold mb-4">Latest Bill</h2>
            <div className="flex flex-col items-center justify-center">
            <BillCard />
            </div>
      
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
