"use client";

import { userContext } from "@/app/context/UserProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const Selected = ({ p, state }) => {
    const {
        Plan, setPlan, saved, setSaved
    } = useContext(userContext);
    const [mark, setMark] = useState(false);
    const delbtn = () => {
        if (state === "plan") {
            toast.success("Sucessfully Deleted");
            const newData = Plan.filter((pl) => pl.id !== p.id);
            setPlan(newData);
        }
        else if (state === "save") {
            toast.success("Sucessfully Deleted");
            const newDataa = saved.filter((sv) => sv.id !== p.id);
            setSaved(newDataa);
        }
    }
    const marks = () => {
        toast.success("The works out done!");
        setMark(true);
    }
    return (
        <div className="w-full rounded-lg border border-gray-700 bg-[#12161c] p-3">
            <div className="flex items-center justify-between gap-4">


                <div className="flex items-center gap-3">


                    <div className="relative h-16 w-24 overflow-hidden rounded-lg">
                        <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div>
                        <h2 className="text-sm font-bold uppercase text-white">
                            {p.name}
                        </h2>

                        <p className="mt-1 text-xs text-gray-400">
                            {p.muscleGroups.join(" • ")}
                        </p>

                        <div className="mt-2 flex items-center gap-3 text-xs text-gray-300">
                            <span>◷ {p.duration} min</span>
                            <span>🔥 {p.caloriesBurned} kcal</span>
                            <span>⚙ {p.sets}×{p.reps}</span>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-2">

                    <Link href={`/myplan/${p.id}`}>
                        <button className="rounded-full border border-gray-600 px-4 py-2 text-xs text-white transition hover:bg-gray-800">
                            View Details
                        </button>
                    </Link>

                    <button onClick={marks} className="rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-lime-300">
                        {mark ? "Done" : "✓ Mark as Done"}
                    </button>

                    <button onClick={delbtn} className="ml-1 text-gray-500 hover:text-white">
                        ×
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Selected;