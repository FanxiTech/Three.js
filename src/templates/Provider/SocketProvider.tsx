import { io, Socket } from "socket.io-client";
import { SOCKETURL } from "@/constants";
import { createContext } from "react";
const socket = io(SOCKETURL);

export const SocketContext = createContext<Socket | null>(null);

type SocketProviderProps = {
  children: React.ReactNode
}


export const SocketProvider = ({ children }: SocketProviderProps) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
