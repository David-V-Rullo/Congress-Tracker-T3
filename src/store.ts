import { createStore, createTypedHooks } from "easy-peasy";
import type { StoreModel } from "./model";
import model from "./model";
// import { createBrowserHistory } from "history";

// export const historyRef = createBrowserHistory();

const { useStoreActions, useStoreState, useStoreDispatch } =
  createTypedHooks<StoreModel>();

export const useActions = useStoreActions;
export const useStore = useStoreState;
export const useDispatch = useStoreDispatch;

// let initialState: any = {};

// interface ResetStoreModel extends StoreModel {
//   reset: Action<StoreModel, any>;
// }
const store = createStore<StoreModel>({
  ...model,
});

// initialState = store.getState();
export default store;
