"use client";

import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReacNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
