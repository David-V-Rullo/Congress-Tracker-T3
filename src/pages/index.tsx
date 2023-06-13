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
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="flex items-center justify-center h-1/4 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] mt-5 mb-5">
          Congress Tracker
        </h1>
        <div className="flex flex-row h-3/4">
          <div className="flex flex-col w-3/8 bg-black">
            <NavBar />
          </div>
          <div className="flex flex-col w-5/8">
            <BillCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
