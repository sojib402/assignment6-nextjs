import { IFit } from '@/app/types/books.type';
import React from 'react';
import Image from 'next/image';
import PlanButton from '@/app/components/FitDetails/PlanButton';
import SaveButton from '@/app/components/FitDetails/SaveButton';
interface IFitDetailsPageProps{
    params:Promise<{
        id:string;
    }>;
}
const getFits = async ():Promise<IFit[]> => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
};

const FitDetailspage = async ({ params }:IFitDetailsPageProps) => {
    const { id } = await params;
    const fitsData = await getFits();
    const fit = fitsData.find((fit: IFit) => String(fit.id) === String(id));
    if (!fit) {
    return <div>Fit not found</div>;
}

    console.log(fit);

    return (
        <div className='flex flex-col md:flex-row justify-between gap-8 container mx-auto py-10 px-4 sm:px-6 lg:px-0'>

            <div className='w-full md:w-1/2 shrink-0'>
                <Image
                    src={fit.image}
                    alt={fit.name}
                    width={800}
                    height={600}
                    className='w-full h-[400px] md:h-[600px] object-cover rounded-xl'
                />
            </div>

            <div className='flex-1'>
                <h2 className='text-3xl font-bold mb-3'>{fit.name}</h2>

                <p className='text-gray-400 mb-4'>{fit.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {
                        fit.muscleGroups.map((muscle, index) => {
                            return (
                                <span
                                    key={index}
                                    className='bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs'
                                >
                                    {muscle}
                                </span>
                            );
                        })
                    }
                </div>

                <div className='border border-gray-800 rounded-xl mb-5'>

                    <div className='flex justify-between px-4 py-3 border-b border-gray-800'>
                        <h2 className='text-xs text-gray-400'>EQUIPMENT</h2>
                        <h2>{fit.equipment}</h2>
                    </div>

                    <div className='flex justify-between px-4 py-3 border-b border-gray-800'>
                        <h2 className='text-xs text-gray-400'>DIFFICULTY</h2>
                        <h2>{fit.difficulty}</h2>
                    </div>

                    <div className='flex justify-between px-4 py-3 border-b border-gray-800'>
                        <h2 className='text-xs text-gray-400'>SETS</h2>
                        <h2>{fit.sets}</h2>
                    </div>

                    <div className='flex justify-between px-4 py-3 border-b border-gray-800'>
                        <h2 className='text-xs text-gray-400'>REPS</h2>
                        <h2>{fit.reps}</h2>
                    </div>

                    <div className='flex justify-between px-4 py-3 border-b border-gray-800'>
                        <h2 className='text-xs text-gray-400'>CALORIES</h2>
                        <h2>{fit.caloriesBurned}</h2>
                    </div>

                    <div className='flex justify-between px-4 py-3'>
                        <h2 className='text-xs text-gray-400'>RATING</h2>
                        <h2>{fit.rating}</h2>
                    </div>

                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-3'>INSTRUCTIONS</h2>

                    <div>
                        {
                            fit.instructions.map((instruction, ind) => {
                                return (
                                    <div key={ind}>
                                        {ind + 1}. {instruction}
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3 mt-5'>
                        
                        <PlanButton fit={fit}/>

                      
                        <SaveButton fit={fit}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FitDetailspage;