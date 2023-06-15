import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  const user = useUser();
  return (
    <nav className="bg-slate-900 sticky top-0 px-6 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
      <li className="flex items-center gap-4">Fart</li>
      <li className="flex items-center gap-4">Fart</li>
      {user ? (<li className="flex items-center gap-4"><SignOutButton /></li>) : (<li className="flex items-center gap-4"><SignInButton /></li>)}
      </ul>
      

    </nav>
  );
};

export default NavBar;
