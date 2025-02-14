import { FaFacebook, FaInstagram, FaYoutube, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const email = "MaranzanaFotografia@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="flex flex-row h-[200px] max-h-[200px] text-white text-lg bg-[#A5AF8D] p-6 px-20">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center justify-center gap-2 w-[20%]">
                {copied ? <span className="text-sm text-green-700 ml-1"><FaCheck /></span>  : <IoMailOutline className="text-lg" />}
                    <p>{email}</p>
                    <button onClick={handleCopy} className="cursor-pointer  hover:bg-white rounded-full p-2 hover:text-[#A5AF8D] transition-all">
                        <FaCopy className="text-[16px]" />
                    </button>
                </div>
                <img
                    src="./RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="transition-all duration-500 ease-in-out"
                    loading="lazy"
                    style={{ width: '300px' }}
                    alt=""
                />
                <div className="flex flex-row items-center justify-center gap-6 w-[20%]">
                    <a href=""><FaInstagram className="text-3xl hover:scale-125 hover:text-[#c94949] transition-all cursor-pointer" /></a>
                    <a href=""><FaYoutube className="text-3xl hover:scale-125 hover:text-[#ca3434] transition-all cursor-pointer" /></a>
                    <a href=""><FaFacebook className="text-3xl hover:scale-125 hover:text-[#403f8d] transition-all cursor-pointer" /></a>
                </div>
            </div>
        </footer>
    );
}
