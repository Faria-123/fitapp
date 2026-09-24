// import React from 'react';
"use client"
import { useContext, useState } from "react";
import { userContext } from "../context/UserProvider";
import Selected from "@/Components/Selected";

const page = () => {
    const {
        Plan, setPlan, saved, setSaved
    } = useContext(userContext);
    const [state, setState] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");
    const currentData = state === "plan" ? Plan : saved;
    const sortedData = [...currentData].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return a.rating - b.rating;
        }

        return 0;
    });
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <h1 className="text-3xl text-white font-bold">MY PLAN</h1>
                <p className="text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="bg-[#13161D] p-3.5 container mx-auto my-3">
                {
                    state === "plan" && <div>

                        <div className="flex justify-between">
                            <div className="space-y-1">
                                <p className=" text-gray-400">Exercises</p>
                                <p className="text-4xl text-yellow-400">{Plan.length}</p>
                            </div>
                            <div className="space-y-1">
                                <p className=" text-gray-400">Minutes</p>
                                <p className="text-white font-bold text-4xl">
                                    {Plan.reduce((total, exercise) => {
                                        return total + exercise.duration;
                                    }, 0)
                                    }
                                </p>

                            </div>
                            <div className="space-y-1">
                                <p className=" text-gray-400">Calories</p>
                                <p className=" text-4xl text-white font-bold">
                                    {
                                        Plan.reduce((t, p) => {
                                            return t + p.caloriesBurned
                                        }, 0)
                                    }
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                }

                {
                    state === "save" && <div>

                        <div className="flex justify-between">
                            <div className="space-y-1">
                                <p className=" text-gray-400">Exercises</p>
                                <p className="text-4xl text-yellow-400">{saved.length}</p>
                            </div>
                            <div className="space-y-1">
                                <p className=" text-gray-400">Minutes</p>
                                <p className="text-white font-bold text-4xl">
                                    {saved.reduce((total, exercise) => {
                                        return total + exercise.duration;
                                    }, 0)
                                    }
                                </p>

                            </div>
                            <div className="space-y-1">
                                <p className=" text-gray-400">Calories</p>
                                <p className="text-white font-bold text-4xl">
                                    {
                                        saved.reduce((t, p) => {
                                            return t + p.caloriesBurned
                                        }, 0)
                                    }
                                </p>
                            </div>
                        </div>

                    </div>
                }
            </div>

            <div className="min-h-screen bg-[#0d1014] text-white px-4 md:px-8 py-6 container mx-auto">


                <div className="flex items-center justify-between border-b border-dashed border-gray-800 pb-4">

                    <div className="tabs tabs-box bg-[#171b21] p-1 rounded-lg">

                        <button
                            onClick={() => setState("plan")}
                            className={`tab h-7 min-h-7 px-4 text-[10px] font-medium rounded-md ${state === "plan"
                                ? "bg-[#252b34] text-white"
                                : "text-gray-500"
                                }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setState("save")}
                            className={`tab h-7 min-h-7 px-5 text-[10px] font-medium rounded-md ${state === "save"
                                ? "bg-[#252b34] text-white"
                                : "text-gray-500"
                                }`}
                        >
                            Saved
                        </button>

                    </div>


                    <div className="flex items-center gap-3">

                        <span className="text-[9px] text-gray-500">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-xs h-7 min-h-7 rounded-md border border-gray-700 bg-[#171b21] text-[9px] text-gray-300 outline-none"
                        >
                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>
                        </select>

                    </div>
                </div>




                {
                    Plan.length === 0 && saved.length === 0 && <div className="border-b border-dashed border-gray-800 min-h-[165px] flex items-center justify-center">

                        <div className="text-center">


                            <h2 className="text-[12px] font-black tracking-wide uppercase text-gray-200">
                                Nothing Here Yet
                            </h2>


                            <p className="mt-1 text-[8px] text-gray-500">
                                Browse the library and add a lift to get today moving.
                            </p>


                            <button
                                className="btn btn-sm min-h-0 h-7 mt-4 px-5 rounded-full
                        bg-lime-400 hover:bg-lime-300
                        border-none text-black
                        text-[8px] font-bold
                        shadow-[0_0_15px_rgba(163,230,53,0.25)]"
                            >
                                Go to workouts
                            </button>

                        </div>

                    </div>
                }
                {
                    state === "plan" &&

                    sortedData.map((p) => (
                        <Selected
                            p={p}
                            state={state}
                            key={p.id}
                        />
                    ))

                }

                {
                    state === "save" &&

                    sortedData.map((p) => (
                        <Selected
                            p={p}
                            state={state}
                            key={p.id}
                        />
                    ))

                }

            </div>

        </div>
    );
};

export default page;