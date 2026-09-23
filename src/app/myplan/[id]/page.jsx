// import React from 'react';

import Image from "next/image";

const page = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await res.json();
    return (
        <div className="bg-black">
            <div className="bg-[#0f1115] text-white p-6 md:p-10 rounded-2xl max-w-5xl mx-auto shadow-2xl my-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">


                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                        <Image
                            src={data.image}
                            alt={data.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>


                    <div className="flex flex-col space-y-6">


                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white">
                                {data.name}
                            </h2>
                            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                                {data.description}
                            </p>
                        </div>


                        <div className="flex gap-2">
                            {data.muscleGroups?.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="badge badge-sm border-0 bg-lime-400 text-black font-semibold px-3 py-2 text-xs"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        <div className="bg-[#161920] rounded-xl p-4 border border-zinc-800/60 divide-y divide-zinc-800/50">
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">EQUIPMENT</span>
                                <span className="text-zinc-200 font-medium">{data.equipment}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">DIFFICULTY</span>
                                <span className="text-zinc-200 font-medium">{data.difficulty}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">SETS</span>
                                <span className="text-zinc-200 font-medium">{data.sets}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">REPS</span>
                                <span className="text-zinc-200 font-medium">{data.reps}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">DURATION</span>
                                <span className="text-zinc-200 font-medium">{data.duration} min</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">CALORIES</span>
                                <span className="text-zinc-200 font-medium">{data.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between items-center py-2 text-xs">
                                <span className="text-zinc-400 font-semibold tracking-wider uppercase">RATING</span>
                                <span className="text-zinc-200 font-medium">{data.rating}</span>
                            </div>
                        </div>


                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                                INSTRUCTIONS
                            </h3>
                            <ol className="space-y-2 text-xs text-zinc-400 leading-relaxed list-none">
                                {data.instructions?.map((step, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="font-semibold text-zinc-500">{idx + 1}.</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>


                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="btn bg-lime-400 hover:bg-lime-500 text-black border-0 font-bold text-xs uppercase rounded-lg px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add to today's plan
                            </button>
                            <button className="btn btn-outline border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs uppercase font-medium rounded-lg px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                Save for later
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;