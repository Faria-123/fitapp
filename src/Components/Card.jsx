"use client"
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Card = ({ d }) => {
    const handleDetails = () => {
        toast.info(`Opening ${d.name} details...`);
    };
    return (
        <Link href={`/myplan/${d.id}`} onClick={handleDetails} >
            <div className="card  overflow-hidden rounded-xl border border-white/10 bg-[#15171D] shadow-lg">


                <figure className="relative h-[300px] w-full bg-zinc-900 overflow-hidden">
                    <Image
                        src={d.image}
                        alt={d.name}
                        fill
                        className="object-cover"
                    />
                </figure>


                <div className="card-body gap-0 p-4">


                    <div className="mb-3 flex flex-wrap gap-2">
                        {d.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#C2F800]/15 px-2.5 py-1 text-[8px] font-bold uppercase text-[#C2F800]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>


                    <h2 className="text-sm font-black uppercase text-white">
                        {d.name}
                    </h2>


                    <p className="mt-1 text-[10px] text-gray-500">
                        {d.equipment}
                    </p>


                    <div className="my-3 border-t border-white/10"></div>


                    <div className="flex items-center gap-4 text-[9px] text-gray-400">

                        <span>
                            ◷ {d.duration} min
                        </span>

                        <span>
                            🔥 {d.caloriesBurned} kcal
                        </span>

                        <span>
                            ★ {d.rating}
                        </span>

                    </div>

                </div>
            </div>
        </Link>
    );
};

export default Card;