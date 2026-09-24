// import React from 'react';
"use client"

import { userContext } from "@/app/context/UserProvider";
import { useContext } from "react";

const Btn = ({ data }) => {
    const {
        Plan, setPlan, saved, setSaved
    } = useContext(userContext);
    const handlePlan = () => {
        setPlan([...Plan, data]);
    }
    const handleSave = () => {
        setSaved([...saved, data]);
    }
    console.log(Plan, saved);
    return (

        <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={handlePlan} className="btn bg-lime-400 hover:bg-lime-500 text-black border-0 font-bold text-xs uppercase rounded-lg px-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add to today's plan
            </button>
            <button onClick={handleSave} className="btn btn-outline border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs uppercase font-medium rounded-lg px-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save for later
            </button>
        </div>

    );
};

export default Btn;