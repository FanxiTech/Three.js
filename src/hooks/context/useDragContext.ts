import { DragContext } from "@/templates/Provider/DragProvider";
import { useContext } from "react";


export const useDragContext = () => {
    const context = useContext(DragContext);
    if (!context) {
        throw new Error('useDrag must be used within a DragProvider');
    }
    return context;
};