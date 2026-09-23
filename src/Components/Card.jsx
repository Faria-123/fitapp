import Image from "next/image";

const Card = ({ d }) => {
    return (
        <div className="card  overflow-hidden rounded-xl border border-white/10 bg-[#15171D] shadow-lg">

            {/* Image */}
            {/* <figure className="relative h-[150px] w-full">
                <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover"
                />
            </figure> */}
            <figure className="relative h-[300px] w-full bg-zinc-900 overflow-hidden">
                <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body gap-0 p-4">

                {/* Muscle Groups */}
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

                {/* Workout Name */}
                <h2 className="text-sm font-black uppercase text-white">
                    {d.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-[10px] text-gray-500">
                    {d.equipment}
                </p>

                {/* Divider */}
                <div className="my-3 border-t border-white/10"></div>

                {/* Bottom Information */}
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
    );
};

export default Card;