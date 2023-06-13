import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { StoreProvider } from "easy-peasy";
import store from "../store"



const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <StoreProvider store={store}>
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
    </StoreProvider>
  );
};

export default api.withTRPC(MyApp);
