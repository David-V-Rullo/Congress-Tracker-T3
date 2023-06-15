import React, { useEffect } from "react";
import { useStore, useActions } from "../store";

const BillCard = () => {
  const latestBill = useStore((state) => state.latestBill);
  const allBills = useStore((state) => state.allBills);
  const fetchBills = useActions((actions) => actions.fetchBills);

  useEffect(() => {
    fetchBills();
  }, []);

  console.log(latestBill);
if (latestBill){
    return (
            <div className="max-w-lg rounded overflow-hidden bg-black shadow-lg p-5">
              
             
              <h2 className="text-gray-200 text-xl underline text-center font-bold mb-2">{latestBill.bill_id.toUpperCase()}</h2>
      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-col w-3/4">
          
          <p className="text-gray-200 pb-2 mb-2 underline">{latestBill.title}</p>
      
          <table className="w-full">
  <tbody>
    <tr>
      <td className="text-gray-200 font-bold">Introduced Date:</td>
      <td className="text-gray-200">{latestBill.introduced_date}</td>
    </tr>
    <tr>
      <td className="text-gray-200 font-bold">Sponsor:</td>
      <td className="text-gray-200">{latestBill.sponsor_name}</td>
    </tr>
    <tr>
      <td className="text-gray-200 font-bold">Party:</td>
      <td className="text-gray-200">{latestBill.sponsor_party}</td>
    </tr>
    <tr>
      <td className="text-gray-200 font-bold">State:</td>
      <td className="text-gray-200">{latestBill.sponsor_state}</td>
    </tr>
  </tbody>
</table>
        </div>
        {/* Add more bill details here */}
          <div className="flex flex-col space-y-2">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Introduced</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Passed House</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Passed Senate</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Became Law</button>
          </div>
      </div>
      
    </div>          
    )}
    else {
      return (
      <div className="max-w-md rounded overflow-hidden bg-black shadow-lg">No Bills</div>)}};

export default BillCard;
