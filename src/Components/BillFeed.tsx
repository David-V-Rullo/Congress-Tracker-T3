import React, { useEffect } from "react";
import { useStore, useActions } from "../store";
import BillCard from "./BillCard";

const BillFeed = () => {
  const latestBill = useStore((state) => state.latestBill);
  const allBills = useStore((state) => state.allBills);
  const fetchBills = useActions((actions) => actions.fetchBills);

  useEffect(() => {
    fetchBills();
  }, []);

  console.log(latestBill);
  return (
    <>
{latestBill && <BillCard bill={latestBill} />}
    <p>No Bills</p>
  </>)
};

export default BillFeed;
