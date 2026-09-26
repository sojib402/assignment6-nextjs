import React from 'react';
import FitCard from '../components/shared/FitCard';
import { IFit } from '@/app/types/books.type';
const getFits=async()=>{
const response=await fetch('https://api.abcz.workers.dev/api/fitlog')
const data=await response.json()
return data
}
const Fits =async () => {
    const fitsData=await getFits()
    return (
        <div className='py-10 container mx-auto px-4 sm:px-6 lg:px-0'>
        <h1 className='text-3xl sm:text-4xl text-white'>THE LIBRARY</h1>
        <p className='mb-7'>Twelve lifts covering every major muscle group.</p>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {
        fitsData.map((fit:IFit, ind:number) => {
            return (
                <FitCard fit={fit} key={ind}/>
            )
        })
    }
</section>
</div>
    );
};

export default Fits;