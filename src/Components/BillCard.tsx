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
            <div className="max-w-md rounded overflow-hidden bg-black shadow-lg">
      <div className="flex items-start">
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-4">{latestBill.bill_id}</h2>
          <p className="text-gray-600">{latestBill.title}</p>
        </div>
        <div className="w-1/2 flex justify-center my-10">
          <div className="flex flex-col space-y-2">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Introduced</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Passed House</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Passed Senate</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Became Law</button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Introduced Date: {latestBill.introduced_date}</p>
        <p className="text-gray-700">Sponsor: {latestBill.sponsor_name}</p>
        <p className="text-gray-700">Party: {latestBill.sponsor_party}</p>
        <p className="text-gray-700">State: {latestBill.sponsor_state}</p>
        {/* Add more bill details here */}
      </div>
    </div>          
    )};
  };

export default BillCard;
