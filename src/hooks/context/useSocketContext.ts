import { useContext } from "react";
import { SocketContext } from "@/templates/Provider/SocketProvider";

export default function useSocketContext() {
  const socket = useContext(SocketContext);
  return socket;
}
