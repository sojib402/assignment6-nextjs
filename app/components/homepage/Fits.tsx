import React from 'react';
import Image from 'next/image';
const getFits=async()=>{
const response=await fetch('https://api.abcz.workers.dev/api/fitlog')
const data=await response.json()
return data
}
const Fits =async () => {
    const fitsData=await getFits()
    console.log(fitsData)
    return (
        <section className="grid grid-cols-3 gap-5">
    {
        fitsData.map((fit, ind) => {
            return (
                <div
                    key={ind}
                    className="bg-[#15171D] rounded-xl overflow-hidden"
                >

                    <Image
                        src={fit.image}
                        alt={fit.name}
                        width={400}
                        height={220}
                        className="w-full h-52 object-cover"
                    />

                    <div className="p-4">

                        <div className="flex gap-2 mb-3">
                            <span className="bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs">
                                {fit.muscleGroups[0]}
                            </span>

                            <span className="bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs">
                                {fit.muscleGroups[1]}
                            </span>
                        </div>

                        <h2 className="text-white text-lg font-bold">
                            {fit.name}
                        </h2>

                        <p className="text-gray-400 text-sm">
                            {fit.equipment}
                        </p>

                        <div className="border-t border-gray-700 my-4"></div>

                        <div className="flex gap-4 text-gray-400 text-sm">
                            <span>{fit.duration} min</span>
                            <span>{fit.caloriesBurned} kcal</span>
                            <span>★ {fit.rating}</span>
                        </div>

                    </div>

                </div>
            )
        })
    }
</section>
    );
};

export default Fits;