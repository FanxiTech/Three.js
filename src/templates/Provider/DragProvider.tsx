
import React, { createContext, useState, useContext, FC } from 'react';

// import { tempBoxs } from './templates';
import { ComponentInfoType, StorageComponentsType } from "../../type/DesignMain";



type DragContextType = {
    components: ComponentInfoType[];
    setComponents: React.Dispatch<React.SetStateAction<ComponentInfoType[]>>;
};

export const DragContext = createContext<DragContextType | null>(null);

type ProviderProps = {
    children: React.ReactNode
}

export default function DragComponentProvider({ children }: ProviderProps) {
    const [components, setComponents] = useState<ComponentInfoType[]>([]);
   
    return (
        <DragContext.Provider value={{ components, setComponents }}>
            {children}
        </DragContext.Provider>
    );
}
