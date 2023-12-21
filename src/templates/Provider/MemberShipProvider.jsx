import useCreateMemberSystem from "@/hooks/portfolio/useCreateMemberSystem";
import React, { createContext, useState } from "react";

export const MemberShipContext = createContext(null);

export default function MemberShipProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [hash, setHash] = useState("");
  const {
    hasMintVIP,
    getDeployAirDropPool,
    mintVIP,
    mintOld,
    deposit,
    withdrawMoney,
    data,
    balance,
    withdraw,
  } = useCreateMemberSystem(setLoading, setHash);

  return (
    <MemberShipContext.Provider
      value={{
        hasMintVIP,
        deposit,
        getDeployAirDropPool,
        withdrawMoney,
        mintVIP,
        mintOld,
        data,
        balance,
        withdraw,
        loading,
        hash,
        setLoading,
        setHash,
      }}
    >
      {children}
    </MemberShipContext.Provider>
  );
}
