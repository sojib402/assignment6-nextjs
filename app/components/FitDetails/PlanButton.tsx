'use client'
import { FitsContext } from '@/app/context/FitsContext';
import { IFit } from '@/app/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanButton = ({fit}:{fit:IFit}) => {
    const {addPlans,setAddPlans}=useContext(FitsContext)
    const handlePlan=()=>{
        const duplicate=addPlans.some((item)=>item.id===fit.id)
        if(duplicate){
            toast.error(`'${fit.name}' already exits`)
            return;
        }
        setAddPlans([...addPlans,fit])
         toast.success(`you have triggered Plan '${fit.name}'`)
    }
    return (
        <div>
            <button onClick={()=>handlePlan()} className='bg-[#CCFF00] px-3 py-2 rounded-2xl text-black'>
                           🗓️ Add to today's plan
          </button>
        </div>
    );
};

export default PlanButton;