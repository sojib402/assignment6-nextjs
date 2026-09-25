'use client'
import { FitsContext } from '@/app/context/FitsContext';
import { IFit } from '@/app/types/books.type';
import React, { useContext } from 'react';

const SaveButton = ({fit}:{fit:IFit}) => {
    const {addSave,setAddSave}=useContext(FitsContext)

    const handleSave=()=>{
        console.log('Save button is triggered')
        setAddSave([...addSave,fit])
        alert('you have triggered')
    }
    return (
        <div>
            <button onClick={()=>handleSave()} className='px-3 py-2 text-white border border-white rounded-2xl'>
                            ♧ Save for later
                        </button>
        </div>
    );
};

export default SaveButton;