import React from 'react';
import Image from 'next/image';
import { IFit } from '@/app/types/books.type';
import Link from 'next/link';
interface IFitCardProps {
    fit: IFit
}
const FitCard = ({ fit }: IFitCardProps) => {
    return (
        <div className="bg-[#15171D] rounded-xl overflow-hidden">

            <Image
                src={fit.image}
                alt={fit.name}
                width={400}
                height={220}
                className="w-full h-52 object-cover"
            />

            <div className="p-4">

                <div className='flex flex-wrap gap-2 mb-2'>{
                    fit.muscleGroups.map((muscle, index) => {
                        return (
                            <span key={index} className='bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs'>
                                {muscle}
                            </span>
                        )
                    })
                }
                </div>
                <Link href={`/Fits/${fit.id}`}>
                    <button className="text-white text-lg font-bold">
                        {fit.name}
                    </button>
                </Link>

                <p className="text-gray-400 text-sm">
                    {fit.equipment}
                </p>

                <div className="border-t border-gray-700 my-4"></div>

                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <span>{fit.duration} min</span>
                    <span>{fit.caloriesBurned} kcal</span>
                    <span>☆ {fit.rating}</span>
                </div>

            </div>

        </div>
    );
};

export default FitCard;