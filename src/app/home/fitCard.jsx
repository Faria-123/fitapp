// import React from 'react';

import Card from "@/Components/Card";

const FitCard = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return (

        <div className="bg-black ">

            <div className="container mx-auto space-y-4">
                <h1 className="text-[1.8rem] font-bold text-white">THE LIBRARY</h1>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">

                    {
                        data.map((d, ind) => <Card d={d} key={ind}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FitCard;