import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  const user = useUser();
  return (
    <nav className="bg-slate-400">
      <div className="flex flex-col content-start gap-2 px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex-shrink-0 text-white">My App</div>
          </div>
          <div>
            <div>
              {user.isSignedIn && <SignOutButton />}
              {!user.isSignedIn && <SignInButton />}
            </div>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
