'use client'

import React, { ReactNode, createContext, useState } from 'react';
import { IFit } from '@/app/types/books.type';

interface IFitsContext {
    addPlans: IFit[];
    setAddPlans: React.Dispatch<React.SetStateAction<IFit[]>>;
    addSave: IFit[];
    setAddSave: React.Dispatch<React.SetStateAction<IFit[]>>;
}

export const FitsContext = createContext<IFitsContext>({
    addPlans: [],
    setAddPlans: () => { },
    addSave: [],
    setAddSave: () => { },
});

const FitsProvider = ({ children }: { children: ReactNode }) => {
    const [addPlans, setAddPlans] = useState<IFit[]>([]);
    const [addSave, setAddSave] = useState<IFit[]>([]);

    const sharedData = {
        addPlans,
        setAddPlans,
        addSave,
        setAddSave
    }

    return (
        <FitsContext.Provider value={sharedData}>
            {children}
        </FitsContext.Provider>
    );
};

export default FitsProvider;