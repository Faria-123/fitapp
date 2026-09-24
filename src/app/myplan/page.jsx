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
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">MY PLAN</h1>
                <p className="text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div>
                {
                    state === "plan" && <div>

                        <div className="flex justify-between">
                            <div className="flex justify-center items-center">
                                <p>Exercises</p>
                                <p>{Plan.length}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <p>Minutes</p>
                                <p>
                                    {Plan.reduce((total, exercise) => {
                                        return total + exercise.duration;
                                    }, 0)
                                    }
                                </p>

                            </div>
                            <div className="flex justify-center items-center">
                                <p>Calories</p>
                                <p>
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
                            <div className="flex justify-center items-center">
                                <p>Exercises</p>
                                <p>{saved.length}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <p>Minutes</p>
                                <p>
                                    {saved.reduce((total, exercise) => {
                                        return total + exercise.duration;
                                    }, 0)
                                    }
                                </p>

                            </div>
                            <div className="flex justify-center items-center">
                                <p>Calories</p>
                                <p>
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

            <div className="min-h-screen bg-[#0d1014] text-white px-4 md:px-8 py-6">

                {/* Tabs */}
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

                    {/* Right side small text */}
                    <span className="text-[9px] text-gray-600">
                        5 MAX
                    </span>
                </div>


                {/* Empty State */}

                {
                    Plan.length === 0 && saved.length === 0 && <div className="border-b border-dashed border-gray-800 min-h-[165px] flex items-center justify-center">

                        <div className="text-center">

                            {/* Heading */}
                            <h2 className="text-[12px] font-black tracking-wide uppercase text-gray-200">
                                Nothing Here Yet
                            </h2>

                            {/* Description */}
                            <p className="mt-1 text-[8px] text-gray-500">
                                Browse the library and add a lift to get today moving.
                            </p>

                            {/* Button */}
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
                    Plan.map((p, ind) => (
                        <Selected p={p} key={ind} />
                    ))
                }

                {
                    state === "save" &&
                    saved.map((p, ind) => (
                        <Selected p={p} key={ind} />
                    ))
                }

            </div>

        </div>
    );
};

export default page;