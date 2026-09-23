// import React from 'react';
import Image from "next/image";
import img from "../assets/banner.png"
const Banner = () => {
    return (

        <div className="bg-black">
            <section className="mx-auto w-full max-w-6xl px-2 py-4 my-7 ">
                <div className="card min-h-[235px] overflow-hidden rounded-xl border border-base-content/10 bg-[#15171D]">

                    <div className="card-body flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center md:px-8">

                        {/* Left Content */}
                        <div className="max-w-xl">

                            {/* Small Label */}
                            <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-[#C2F800]">
                                Workout Library
                            </p>

                            {/* Heading */}
                            <h1 className="max-w-lg text-4xl font-black uppercase leading-[0.95] text-white md:text-5xl">
                                Train with intent. Log every set.
                            </h1>

                            {/* Description */}
                            <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-400">
                                FitLog is a dark, no-nonsense gym companion: pick a lift,
                                lock it into today&apos;s plan, and watch the week&apos;s
                                work add up.
                            </p>

                            {/* Button */}
                            <button className="btn mt-5 h-9 min-h-9 rounded-md border-0 bg-[#C2F800] px-5 text-[9px] font-black uppercase text-black hover:bg-[#d0ff33]">
                                Browse Workouts
                            </button>
                        </div>


                        {/* Right Image */}
                        <div className="flex justify-center md:h-[210px] md:w-[300px]">
                            <Image
                                src={img}
                                alt="Workout"
                                className="h-[190px] w-[334px] object-contain md:h-full"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;