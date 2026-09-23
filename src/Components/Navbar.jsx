// // import React from 'react';
// "use client"
// import Image from "next/image";
// import img from "../assets/logo.png"
// import { useState } from "react";
// const Navbar = () => {
//     const [state, setState] = useState("");
//     const handleState = (t) => {
//         setState(t);

//     }
//     return (

//         <div className="bg-black ">
//             <div className="flex justify-between items-center p-5 container mx-auto">
//                 <div className="flex justify-between items-center gap-3">
//                     <Image src={img} alt="logo"></Image>
//                     <h1 className="text-2xl font-bold text-white">FITLOG</h1>
//                 </div>

//                 <div className="flex justify-between items-center gap-3">
//                     <button onClick={() => handleState("workout")} className={`btn btn-active btn-warning ${state === "workout" ? "bg-[#C2F800]/150 text-yellow-500" : "text-gray-300 bg-transparent border-none "} rounded-2xl`}>Workouts</button>

//                     <button onClick={() => handleState("myplan")} class={`btn btn-active rounded-2xl ${state === "myplan" ? "bg-[#C2F800]/150  text-yellow-500" : "text-gray-300 bg-transparent border-none "}`}>My Plans</button>

//                 </div>
//                 <div className="flex justify-between items-center gap-3">
//                     <button className="btn btn-neutral btn-outline bg-amber-200 bg-transparent text-gray-200">Plan <span className="text-[#C2F800]">(0)</span></button>
//                     <button className="btn btn-neutral btn-outline bg-amber-200 bg-transparent text-gray-200">Saved <span className="text-[#C2F800]">(0)</span></button>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import img from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
    const [state, setState] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleState = (t) => {
        setState(t);
        setMenuOpen(false);
    };

    return (
        <div className="bg-black">
            <div className="container mx-auto px-4 py-4 md:px-5">

                {/* Top Navbar */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <Image
                            src={img}
                            alt="FITLOG logo"
                            width={35}
                            height={35}
                            className="h-8 w-8 object-contain md:h-10 md:w-10"
                        />

                        <h1 className="text-xl font-bold text-white md:text-2xl">
                            FITLOG
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-2 md:flex">

                        <button
                            onClick={() => handleState("workout")}
                            className={`btn rounded-2xl border-none ${state === "workout"
                                    ? "bg-[#C2F800]/20 text-[#C2F800]"
                                    : "bg-transparent text-gray-300"
                                }`}
                        >
                            Workouts
                        </button>

                        <button
                            onClick={() => handleState("myplan")}
                            className={`btn rounded-2xl border-none ${state === "myplan"
                                    ? "bg-[#C2F800]/20 text-[#C2F800]"
                                    : "bg-transparent text-gray-300"
                                }`}
                        >
                            My Plans
                        </button>

                    </div>

                    {/* Desktop Counters */}
                    <div className="hidden items-center gap-2 md:flex">

                        <button className="btn btn-outline rounded-2xl border-gray-700 bg-transparent text-gray-200">
                            Plan{" "}
                            <span className="text-[#C2F800]">
                                (0)
                            </span>
                        </button>

                        <button className="btn btn-outline rounded-2xl border-gray-700 bg-transparent text-gray-200">
                            Saved{" "}
                            <span className="text-[#C2F800]">
                                (0)
                            </span>
                        </button>

                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn btn-square btn-ghost text-white md:hidden"
                    >
                        {menuOpen ? (
                            <span className="text-2xl">✕</span>
                        ) : (
                            <span className="text-2xl">☰</span>
                        )}
                    </button>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="mt-4 flex flex-col gap-2 border-t border-gray-800 pt-4 md:hidden">

                        {/* Workouts */}
                        <button
                            onClick={() => handleState("workout")}
                            className={`rounded-xl px-4 py-3 text-left ${state === "workout"
                                    ? "bg-[#C2F800]/20 text-[#C2F800]"
                                    : "text-gray-300"
                                }`}
                        >
                            Workouts
                        </button>

                        {/* My Plans */}
                        <button
                            onClick={() => handleState("myplan")}
                            className={`rounded-xl px-4 py-3 text-left ${state === "myplan"
                                    ? "bg-[#C2F800]/20 text-[#C2F800]"
                                    : "text-gray-300"
                                }`}
                        >
                            My Plans
                        </button>

                        {/* Counters */}
                        <div className="mt-2 flex gap-2">

                            <button className="btn btn-outline flex-1 rounded-2xl border-gray-700 bg-transparent text-gray-200">
                                Plan{" "}
                                <span className="text-[#C2F800]">
                                    (0)
                                </span>
                            </button>

                            <button className="btn btn-outline flex-1 rounded-2xl border-gray-700 bg-transparent text-gray-200">
                                Saved{" "}
                                <span className="text-[#C2F800]">
                                    (0)
                                </span>
                            </button>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;