

"use client";

import Image from "next/image";
import Link from "next/link";
import img from "../assets/logo.png";
import { useContext, useState } from "react";
import { userContext } from "@/app/context/UserProvider";

const Navbar = () => {
    const [state, setState] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const handleState = (value) => {
        setState(value);
        setMenuOpen(false);
    };
    const {
        Plan, setPlan, saved, setSaved
    } = useContext(userContext);

    return (
        <div className="bg-black">
            <div className="container mx-auto px-4 py-4 md:px-5">


                <div className="flex items-center justify-between">


                    <Link
                        href="/"
                        onClick={() => handleState("workout")}
                        className="flex items-center gap-2 md:gap-3"
                    >
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
                    </Link>



                    <div className="hidden items-center gap-2 md:flex">


                        <Link
                            href="/"
                            onClick={() => handleState("workout")}
                            className={`btn rounded-2xl border-none ${state === "workout"
                                ? "bg-[#C2F800]/20 text-[#C2F800]"
                                : "bg-transparent text-gray-300"
                                }`}
                        >
                            Workouts
                        </Link>



                        <Link
                            href="/myplan"
                            onClick={() => handleState("myplan")}
                            className={`btn rounded-2xl border-none ${state === "myplan"
                                ? "bg-[#C2F800]/20 text-[#C2F800]"
                                : "bg-transparent text-gray-300"
                                }`}
                        >
                            My Plans
                        </Link>

                    </div>



                    <div className="hidden items-center gap-2 md:flex">


                        <Link
                            href="/myplan"
                            onClick={() => handleState("myplan")}
                            className="btn btn-outline rounded-2xl border-gray-700 bg-transparent text-gray-200 hover:border-[#C2F800]"
                        >
                            Plan{" "}
                            <span className="text-[#C2F800]">
                                ({Plan.length})
                            </span>
                        </Link>



                        <Link
                            href="/myplan"
                            onClick={() => handleState("saved")}
                            className="btn btn-outline rounded-2xl border-gray-700 bg-transparent text-gray-200 hover:border-[#C2F800]"
                        >
                            Saved{" "}
                            <span className="text-[#C2F800]">
                                ({saved.length})
                            </span>
                        </Link>

                    </div>


                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="btn btn-square btn-ghost text-white md:hidden"
                    >
                        {menuOpen ? (
                            <span className="text-2xl">✕</span>
                        ) : (
                            <span className="text-2xl">☰</span>
                        )}
                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}
                {menuOpen && (
                    <div className="mt-4 flex flex-col gap-2 border-t border-gray-800 pt-4 md:hidden">

                        {/* WORKOUTS */}
                        <Link
                            href="/"
                            onClick={() => handleState("workout")}
                            className={`rounded-xl px-4 py-3 ${state === "workout"
                                ? "bg-[#C2F800]/20 text-[#C2F800]"
                                : "text-gray-300"
                                }`}
                        >
                            Workouts
                        </Link>


                        {/* MY PLANS */}
                        <Link
                            href="/myplan"
                            onClick={() => handleState("myplan")}
                            className={`rounded-xl px-4 py-3 ${state === "myplan"
                                ? "bg-[#C2F800]/20 text-[#C2F800]"
                                : "text-gray-300"
                                }`}
                        >
                            My Plans
                        </Link>


                        {/* COUNTERS */}
                        <div className="mt-2 flex gap-2">

                            {/* PLAN */}
                            <Link
                                href="/myplan"
                                onClick={() => handleState("myplan")}
                                className="btn btn-outline flex-1 rounded-2xl border-gray-700 bg-transparent text-gray-200"
                            >
                                Plan{" "}
                                <span className="text-[#C2F800]">
                                    (0)
                                </span>
                            </Link>


                            {/* SAVED */}
                            <Link
                                href="/saved"
                                onClick={() => handleState("saved")}
                                className="btn btn-outline flex-1 rounded-2xl border-gray-700 bg-transparent text-gray-200"
                            >
                                Saved{" "}
                                <span className="text-[#C2F800]">
                                    (0)
                                </span>
                            </Link>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;