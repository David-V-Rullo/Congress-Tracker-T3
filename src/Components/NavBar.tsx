import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  const user = useUser();
  console.log(user  )
  return (
    <nav className="bg-[#000080] sticky top-0 px-6 py-4 font-gotahm text-[#FFFFFF] w-screen">
       {/* <Image width={250} height={250} src={billnavlogo} alt="Bill Navigator Logo" /> */}
      <ul className="flex flex-row items-start gap-2 whitespace-nowrap">
        <li className="flex items-center gap-4 text-[#FFFFFF] hover:text-[#00BFFF]">Home</li>
        <li className="flex items-center gap-4 text-[#FFFFFF] hover:text-[#00BFFF]">About</li>
        {user.isSignedIn ? (
            <li className="flex items-center gap-4">
              <SignOutButton />
            </li>
        ) : (
            <li className="flex items-center gap-4">
              <SignInButton />
            </li>
        )}
      </ul>
    </nav>
  );
};
// className="text-[#FFFFFF] bg-[#00BFFF] hover:bg-[#FFD700]"
export default NavBar;
