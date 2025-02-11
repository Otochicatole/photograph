export const Nav = ({ isFixed }: { isFixed?: boolean }) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="flex flex-col w-full px-3 items-center justify-center transition-all duration-300 ease-in-out"
            style={{
                position: isFixed ? 'fixed' : 'static',
                top: 0,
                backgroundColor: isFixed ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                backdropFilter: isFixed ? 'blur(12px)' : 'none',
                boxShadow: isFixed ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                zIndex: 9999,
            }}
        >
            <nav className="flex flex-row w-full xl:w-[80%] items-center gap-3 justify-between px-2 lg:px-20 p-1 transition-all duration-300 ease-in-out">
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
                    src="/RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png"
                    className="invert hidden lg:block transition-all duration-500 ease-in-out"
                    style={{
                        width: isFixed ? '166px' : '266px',
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