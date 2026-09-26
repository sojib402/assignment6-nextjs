'use client';

import { FitsContext } from '@/app/context/FitsContext';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { IFit } from '../types/books.type';
const ListedFits = () => {

    const context:{
        addPlans:IFit[];
        setAddPlans:React.Dispatch<React.SetStateAction<IFit[]>>
        addSave:IFit[];
        setAddSave:React.Dispatch<React.SetStateAction<IFit[]>>
    }=useContext(FitsContext);
    const { addPlans, setAddPlans, addSave, setAddSave } = context;
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
    const [showSave, setShowSave] = useState(false);
    // const [done, setDone] = useState(false);
    const [done, setDone] = useState<string[]>([]);
    const fits = showSave ? addSave : addPlans;
    const totalDuration = fits.reduce((total, fit) => total + fit.duration, 0)
    const totalCalories = fits.reduce((total, fit) => total + fit.caloriesBurned, 0)
    const sortFits = (fits:IFit[]) => {
        
        const sortedFits = [...fits]
        if (sortBy === 'duration') {
            sortedFits.sort((a, b) => b.duration - a.duration)
        }
        else if (sortBy === 'calories') {
            sortedFits.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        }
        else if (sortBy === 'rating') {
            sortedFits.sort((a, b) => b.rating - a.rating)
        }
        return sortedFits

    }

    const sortedFits = sortFits(fits)
    
    const handleDelete = (id:string|number) => {
        if (showSave) {
            setAddSave(addSave.filter((fit) => String(fit.id) !== String(id)))
        }
        else {
            setAddPlans(addPlans.filter((fit) => fit.id !== id))
        }
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <div>
                <h1 className="text-3xl text-white my-3">MY PLAN</h1>

                <p className="text-white mb-5">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 justify-between border border-gray p-6 sm:p-15 gap-6 sm:gap-0'>
                <div>
                    <h2 className='text-2xl'>Exercises</h2>
                    <span className="text-[#C2F800] text-4xl">
                        {fits.length}
                    </span>
                </div>

                <div>
                    <h2 className='text-2xl'>Minutes</h2>
                    <span className="text-white text-4xl">
                        {totalDuration}
                    </span>
                </div>

                <div>
                    <h2 className='text-2xl'>Calories</h2>
                    <span className='text-white text-4xl'>{totalCalories}</span>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'>
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
                <div>

                    <h1>Sort By</h1>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                        className="select select-success">
                        {/* <option disabled={true}>Pick a Runtime</option> */}
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                </div>
            </div>

            <div className="mt-6 space-y-4">

                {
                    sortedFits.length === 0 ? (
                        <div className='text-center border border-gray p-10 sm:p-20'>
                            <h2 className='text-4xl text-xl text-white mx-5'>NOTHING HERE YET</h2>
                            <p className='mb-8'>Browse the library and add a lift to get moving.</p>
                            <button className='bg-[#C2F800] px-3 py-3 rounded-full text-black'>Go to workouts</button>
                        </div>
                    ) :
                        sortedFits.map((fit) => (
                            <div
                                key={fit.id}
                                className="bg-[#15171D] border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <Image
                                        src={fit.image}
                                        alt={fit.name}
                                        width={96}
                                        height={64}
                                        className="w-24 h-16 object-cover rounded-lg shrink-0"
                                    />

                                    <div className="min-w-0">
                                        <h2 className="text-white font-bold">
                                            {fit.name}
                                        </h2>

                                        <p className="text-gray-400 text-sm">
                                            {fit.equipment}
                                        </p>

                                        <div className="flex flex-wrap gap-3 text-gray-400 text-sm mt-2">
                                            <span>{fit.duration} min</span>
                                            <span>{fit.caloriesBurned} kcal</span>
                                            <span>☆ {fit.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link href={`/Fits/${fit.id}`}>
                                        <button className="border border-gray-600 text-white px-4 py-2 rounded-lg">
                                            View Details
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            if (done.includes(String(fit.id))) {
                                                toast.error("Already exists!");
                                            } else {
                                                setDone([...done, String(fit.id)]);
                                                toast.success("Workout marked as done!");
                                            }
                                        }}
                                        className={
                                            done.includes(String(fit.id))
                                                ? "bg-[#C2F800] text-black px-4 py-2 rounded-lg"
                                                : "border border-gray-600 text-white px-4 py-2 rounded-lg"
                                        }
                                    >
                                        {done.includes(String(fit.id))
                                            ? "✓ Mark as Done"
                                            : "Mark as Done"}
                                    </button>


                                    <button onClick={() => handleDelete(fit.id)} className="text-gray-400">
                                        ×
                                    </button>
                                </div>
                            </div>
                        ))}
            </div>
        </div>

    );
};

export default ListedFits;