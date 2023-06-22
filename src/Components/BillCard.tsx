import React from "react";
import type { FunctionComponent } from "react";
import { Bill } from "~/model";
interface BillCardProps {
  bill: Bill;
}

const renderButton = (status: string | null, label: string) => (
  <button
    className={`px-4 py-2 text-white ${
      status ? "bg-green-500" : "bg-gray-500"
    }`}
  >
    {label}
  </button>



);

const renderStatus = (
  introduced_date: string | null,
  house_passage: string | null,
  senate_passage: string | null,
  enacted: string | null
) => (
  <>
    {renderButton(introduced_date, "Introduced")}
    {renderButton(house_passage, "Passed House")}
    {renderButton(senate_passage, "Passed Senate")}
    {renderButton(enacted, "Became Law")}
  </>
);

const BillCard: FunctionComponent<BillCardProps> = (props: BillCardProps) => {
  const { bill } = props;
  console.log(bill);

  const { introduced_date, house_passage, senate_passage, enacted } = bill;

  return (
    <div className="max-w-2/4 m-3 overflow-hidden rounded bg-black p-5 shadow-xl">
      <div className="flex flex-col items-center gap-5">
        <div className="flex lg:flex-row sm:flex-col gap-2">
          <table className="w-2/3">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="mb-2 text-center text-xl font-bold text-gray-200 underline"
                >
                  {bill.bill_id.toUpperCase()}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-gray-200">Bill Title:</td>
                <td className="text-gray-200">{bill.short_title}</td>
              </tr>
              <tr>
                <td className="font-bold text-gray-200">Introduced Date:</td>
                <td className="text-gray-200">{bill.introduced_date}</td>
              </tr>
              <tr>
                <td className="font-bold text-gray-200">Sponsor:</td>
                <td className="text-gray-200">
                  {`${bill.sponsor_title} ${bill.sponsor_name}`}{" "}
                </td>
              </tr>
              <tr>
                <td className="font-bold text-gray-200">Party:</td>

                {bill.sponsor_party === "D" ? (
                  <td className="font-bold text-blue-200">
                    {bill.sponsor_party}
                  </td>
                ) : (
                  <td className="font-bold text-red-200">
                    {bill.sponsor_party}
                  </td>
                )}
              </tr>
              <tr>
                <td className="font-bold text-gray-200">State:</td>
                <td className="text-gray-200">{bill.sponsor_state}</td>
              </tr>
            </tbody>
          </table>
          <div className="font-bold text-gray-200">This is a test</div>
        </div>
        <h2 className="font-bold text-gray-200 underline">Status Track</h2>
        <div className="flex lg:flex-row sm:flex-col">
          {renderStatus(
            introduced_date, house_passage, senate_passage, enacted
          )}
        </div>
      </div>
    </div>
  );
};

export default BillCard;
