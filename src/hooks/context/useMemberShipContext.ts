import { MemberShipContext } from "@/templates/Provider/MemberShipProvider";
import { useContext } from "react";

export default function useMemberShipContext() {
  return useContext(MemberShipContext);
}
