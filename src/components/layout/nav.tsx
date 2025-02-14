import { useState } from "react";

export const Nav = ({ isFixed }: { isFixed?: boolean }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="flex flex-col w-full lg:px-3 items-center justify-center transition-all duration-300 ease-in-out"
            style={{
                position: isFixed ? 'fixed' : 'static',
                top: 0,
                backgroundColor: isFixed ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                backdropFilter: isFixed ? 'blur(12px)' : 'none',
                boxShadow: isFixed ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                zIndex: 9999,
            }}
        >
            {/* Nav pantallas chicas */}

            <nav className="flex lg:hidden flex-row w-full justify-between items-center min-h-[70px] bg-white px-3">
            <img
                    src="./RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert block transition-all duration-500 ease-in-out"
                    loading="lazy"
                    style={{
                        height: '60px'
                    }}
                    alt=""
                />
            <button
                    className={`lg:hidden flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 space-y-1 mr-6 p-3  rounded-sm ${isMobileMenuOpen ? 'rotate-180 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </button>
            </nav>
            <div className={`lg:hidden flex flex-col items-center absolute gap-3 top-[70px] left-0 w-full bg-white p-4 space-y-2 transition-all border-b border-[#DCB3AD] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('start')}
                >
                    Home
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('about-me')}
                >
                    Chi sono
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('galleria')}
                >
                    Galleria
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('contact')}
                >
                    Contrato
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('reviews')}
                >
                    Reviews
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('faq')}
                >
                    FAQ
                </a>
            </div>

            {/* Nav pantallas grandes */}

            <nav className="hidden lg:flex flex-row w-full xl:w-[80%] min-h-[70px] items-center gap-3 justify-between px-2 lg:px-20 p-1 transition-all duration-300 ease-in-out">
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('start')}
                >
                    Home
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('about-me')}
                >
                    Chi sono
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('galleria')}
                >
                    Galleria
                </a>
                <img
                    src="./RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert hidden lg:block transition-all duration-500 ease-in-out"
                    loading="lazy"
                    style={{
                        width: '200px'
                    }}
                    alt=""
                />
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('contact')}
                >
                    Contrato
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('reviews')}
                >
                    Reviews
                </a>
                <a
                    className="hover:text-[#999E87] cursor-pointer hover:scale-110 transition-all duration-200 px-3 p-1"
                    onClick={() => scrollToSection('faq')}
                >
                    FAQ
                </a>
            </nav>
        </div>
    );
};