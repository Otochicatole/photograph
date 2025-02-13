import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
    "./FOTOGRAFIAS/CARROUSEL-GRIS/1.jpg",
    "./FOTOGRAFIAS/CARROUSEL-GRIS/2.jpg",
    "./FOTOGRAFIAS/CARROUSEL-GRIS/3.jpg",
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const getPosition = (i: number) => {
        if (i === index) return "z-10 scale-99 opacity-100";
        if ((i + 1) % images.length === index) return "z-0 scale-95 blur-[2px] opacity-50 translate-x-150"
        if ((i - 1 + images.length) % images.length === index) return "z-0 scale-95 blur-[2px] opacity-50 -translate-x-150";
        return "hidden";
    };

    return (
        <div className="w-full flex justify-center items-center py-3 overflow-hidden">
            <div className="relative flex w-full h-[500px] justify-center items-center">
                {images.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        loading="lazy"
                        alt="carousel item"
                        className={`absolute w-[731px] h-[377] object-cover rounded-lg transition-all duration-500 ease-in-out ${getPosition(i)}`}
                        style={{ opacity: i === index ? 1 : 0.6 }}
                    />
                ))}
            </div>
        </div>
    );
}