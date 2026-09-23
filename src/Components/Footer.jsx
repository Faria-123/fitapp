// import React from 'react';
import Image from "next/image";
import img from "../assets/logo.png"
const Footer = () => {
    return (

        <div className="footer bg-black text-neutral-content flex justify-between items-center px-8 py-11 border-t border-zinc-900">

            <aside className="grid-flow-col items-center gap-2">
                <Image
                    src={img}
                    alt="FitLog Logo"
                    className="h-5 w-auto object-contain"
                />
                <span className="font-black tracking-wider text-white text-base">FITLOG</span>
            </aside>


            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xs text-gray-400">
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </nav>
        </div>

    );
};

export default Footer;