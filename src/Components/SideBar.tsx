import React from 'react'

function SideBar() {
  return (
    <nav className="bg-[#000080] sticky top-0 px-6 py-4 font-gotahm text-[#FFFFFF] h-screen">
    {/* <Image width={250} height={250} src={billnavlogo} alt="Bill Navigator Logo" /> */}
   <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
     <li className="flex items-center gap-4 text-[#FFFFFF] hover:text-[#00BFFF]">Session Information</li>
     <li className="flex items-center gap-4 text-[#FFFFFF] hover:text-[#00BFFF]">News</li>  
    </ul>
 </nav>
  )
}

export default SideBar