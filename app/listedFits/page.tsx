'use client';

import { FitsContext } from '@/app/context/FitsContext';
import React, { useContext, useState } from 'react';

const ListedFits = () => {
    const { addPlans, addSave } = useContext(FitsContext);
    const [showSave, setShowSave] = useState(false);
    const fits = showSave ? addSave : addPlans;
    const totalDuration = fits.reduce((total, fit) => total + fit.duration, 0)
    const totalCalories = fits.reduce((total, fit) => total + fit.caloriesBurned, 0)

    console.log(addPlans, addSave, 'from listed fit');

    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-3xl text-white my-3">MY PLAN</h1>

                <p className="text-white mb-5">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className='flex justify-between'>
                <div>
                    <h2>Exercises</h2>
                    <span className="text-[#C2F800] text-4xl">
                        {fits.length}
                    </span>
                </div>

                <div>
                    <h2>Minutes</h2>
                    <span className="text-[#C2F800] text-4xl">
                        {totalDuration}
                    </span>
                </div>

                <div>
                    <h2>Calories</h2>
                    <span>{totalCalories}</span>
                </div>
            </div>
            <div className="flex mt-6">
                <button
                    onClick={() => setShowSave(false)}
                    className={!showSave ? 'bg-[#252830] text-white px-5 py-2' : 'text-gray-400 px-5 py-2'}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setShowSave(true)}
                    className={showSave ? 'bg-[#252830] text-white px-5 py-2' : 'text-gray-400 px-5 py-2'}
                >
                    Saved
                </button>
            </div>
        </div>
    );
};

export default ListedFits;