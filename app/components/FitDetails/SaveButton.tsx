'use client'
import { FitsContext } from '@/app/context/FitsContext';
import { IFit } from '@/app/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveButton = ({ fit }: { fit: IFit }) => {
    const { addSave, setAddSave }: {
        addSave: IFit[];
        setAddSave: React.Dispatch<React.SetStateAction<IFit[]>>;
    } = useContext(FitsContext)

    const handleSave = () => {
        const duplicate = addSave.some((item) => item.id === fit.id)
        if (duplicate) {
            toast.error(`'${fit.name}' already exits`)
            return;
        }
        setAddSave([...addSave, fit])
        toast.success(`you have trigered Saved ${fit.name}`)
    }
    return (
        <div>
            <button onClick={() => handleSave()} className='px-3 py-2 text-white border border-white rounded-2xl text-sm sm:text-base whitespace-nowrap'>
                ♧ Save for later
            </button>
        </div>
    );
};

export default SaveButton;