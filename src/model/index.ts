import { action, thunk, Action, Thunk } from "easy-peasy"
import axios from "axios"
import { env } from "~/env.mjs";

export interface Bill {
    bill_id: string;
    bill_slug: string;
    bill_type: string;
    number: string;
    bill_uri: string;
    title: string;
    short_title: string;
    sponsor_title: string;
    sponsor_id: string;
    sponsor_name: string;
    sponsor_state: string;
    sponsor_party: string;
    sponsor_uri: string;
    gpo_pdf_uri: string | null;
    congressdotgov_url: string;
    govtrack_url: string;
    introduced_date: string;
    active: boolean;
    last_vote: string | null;
    house_passage: string | null;
    senate_passage: string | null;
    enacted: string | null;
    vetoed: string | null;
    cosponsors: number;
    cosponsors_by_party: Record<string, number>;
    committees: string;
    committee_codes: string[];
    subcommittee_codes: string[];
    primary_subject: string;
    summary: string;
    summary_short: string;
    latest_major_action_date: string;
    latest_major_action: string;
  }
  const apiKey = env.NEXT_PUBLIC_PROPUBLICA_API_KEY
export interface StoreModel {
    user: string;
    bill: Bill | null;
    fetchBills: Thunk<StoreModel, void>;
    latestBill: Bill | null;
    allBills: Bill[] | null;
    addLatestBill: Action<StoreModel, Bill> 
    addAllBills: Action<StoreModel, Bill[]> 
}

const model: StoreModel = {
    latestBill: null,
    allBills: null,
    bill: null,
    addAllBills: action((state, payload) => {
        state.allBills = payload
    }),
    addLatestBill: action((state, payload) => {
            state.latestBill = payload
        }),
    user: "placeholder",
    fetchBills: thunk(async (action) => {
        try {
          const response = await axios.get(
            "https://api.propublica.org/congress/v1/bills/search.json?sort=date&dir=desc",
            {
              headers: { "X-API-Key":       
              `${apiKey}` },
            }
          );
          const data = response.data.results;
          action.addLatestBill(data[0].bills[0])
          action.addAllBills(data[0].bills)

        } catch (error) {
          console.log(error);
        }
    }),
};

export default model