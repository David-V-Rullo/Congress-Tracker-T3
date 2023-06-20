import React, { FunctionComponent, useEffect } from "react";
import { Bill } from "~/model";
interface BillCardProps {
  bill: Bill
}

const renderButton = (status: string, label: string) => (
  <button className={`py-2 px-4 text-white ${status ? 'bg-green-500' : 'bg-gray-500'}`}>
    {label}
  </button>
);

const renderStatus = (introduced_date: string, passed_house: string, passed_senate: string, became_law: string) => (
  <>
    {renderButton(introduced_date, "Introduced")}
    {renderButton(passed_house, "Passed House")}
    {renderButton(passed_senate, "Passed Senate")}
    {renderButton(became_law, "Became Law")}
  </>
);

// const renderStatus = (introduced_date: string, passed_house: string, passed_senate: string, became_law: string) => {
//   return (
//     <>
//     {introduced_date ? <button className="py-2 px-4 bg-green-500 text-white ">Introduced</button> : <button className="py-2 px-4 bg-gray-500 text-white ">Introduced</button>}
//     {passed_house ? <button className="py-2 px-4 bg-green-500 text-white ">Passed House</button> : <button className="py-2 px-4 bg-gray-500 text-white ">Passed House</button>}
//     {passed_senate ? <button className="py-2 px-4 bg-green-500 text-white ">Passed Senate</button> : <button className="py-2 px-4 bg-gray-500 text-white ">Passed Senate</button>}    
//     {became_law ? <button className="py-2 px-4 bg-green-500 text-white ">Became Law</button> : <button className="py-2 px-4 bg-gray-500 text-white ">Became Law</button>}
//    </>
//   )}


const BillCard: FunctionComponent<BillCardProps> = (props: BillCardProps) => {

  const { bill } = props;
console.log(bill);

const { introduced_date, passed_house, passed_senate, became_law } = bill

    return (
            <div className="max-w-3/4 rounded overflow-hidden bg-black shadow-xl p-5 m-3">
              <h2 className="text-gray-200 text-xl underline text-center font-bold mb-2">{bill.bill_id.toUpperCase()}</h2>
      <div className="flex flex-col gap-5 items-center">
          <table className="w-full">
  <tbody>
    <tr>
      <td className="text-gray-200 font-bold">Bill Title:</td>
      <td className="text-gray-200">{bill.short_title}</td>
    </tr>
    <tr>
      <td className="text-gray-200 font-bold">Introduced Date:</td>
      <td className="text-gray-200">{bill.introduced_date}</td>
    </tr>
    <tr>
      <td className="text-gray-200 font-bold">Sponsor:</td>
      <td className="text-gray-200">{`${bill.sponsor_title} ${bill.sponsor_name}`}   </td>
    </tr>
    <tr>
      
      <td className="text-gray-200 font-bold">Party:</td>
      
      {bill.sponsor_party === "D" ? <td className="text-blue-200 font-bold">{bill.sponsor_party}</td> : <td className="text-red-200 font-bold">{bill.sponsor_party}</td>
      }
    </tr>
    <tr>
      <td className="text-gray-200 font-bold">State:</td>
      <td className="text-gray-200">{bill.sponsor_state}</td>
    </tr>
  </tbody>
</table>
        {/* Add more bill details here */}
          <div className="flex flex-row ">
            {renderStatus(introduced_date, passed_house, passed_senate, became_law)}
            
            
            
          </div>
      </div>
      
    </div>          
    )};

export default BillCard;
