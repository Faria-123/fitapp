"use client";

import Image from "next/image";

const Selected = ({ p }) => {
    return (
        <div className="w-full rounded-lg border border-gray-700 bg-[#12161c] p-3">
            <div className="flex items-center justify-between gap-4">

                {/* Left side */}
                <div className="flex items-center gap-3">

                    {/* Image */}
                    <div className="relative h-16 w-24 overflow-hidden rounded-lg">
                        <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Exercise information */}
                    <div>
                        <h2 className="text-sm font-bold uppercase text-white">
                            {p.name}
                        </h2>

                        <p className="mt-1 text-xs text-gray-400">
                            {p.muscleGroups.join(" • ")}
                        </p>

                        {/* Stats */}
                        <div className="mt-2 flex items-center gap-3 text-xs text-gray-300">
                            <span>◷ {p.duration} min</span>
                            <span>🔥 {p.caloriesBurned} kcal</span>
                            <span>⚙ {p.sets}×{p.reps}</span>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">

                    <button className="rounded-full border border-gray-600 px-4 py-2 text-xs text-white transition hover:bg-gray-800">
                        View Details
                    </button>

                    <button className="rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-lime-300">
                        ✓ Mark as Done
                    </button>

                    <button className="ml-1 text-gray-500 hover:text-white">
                        ×
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Selected;