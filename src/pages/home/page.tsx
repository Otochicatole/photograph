'use client'
import { useState, useEffect, useRef } from 'react';
import { Button } from "../../components/ui/buttons.tsx";
import { ArrowDown } from "../../components/ui/arrow-down.tsx";
import { Nav } from "../../components/layout/nav.tsx";
import { Presentation } from './sections/presentation.tsx';
import { OfferServices } from './sections/offer-services.tsx';
import { HistoryImages } from './sections/history-images.tsx';
import { AboutMe } from './sections/about-me.tsx';

export default function Home() {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const headerRef = useRef<HTMLElement>(null); // Referencia al header

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                // Obtén la altura del header
                const headerHeight = headerRef.current.offsetHeight;
                // Si el scroll es mayor que la altura del header, activa el fixed
                if (window.scrollY > headerHeight) {
                    setIsNavFixed(true);
                } else {
                    setIsNavFixed(false);
                }
            }
        };

        // Añade el listener de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpia el listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col w-full h-full">
            {/* Header con referencia */}
            <header
                id="home"
                ref={headerRef}
                className="flex flex-col bg-[url('/FOTOGRAFIAS/HEADER/Meliyabel-166.jpg')] min-h-screen w-full bg-cover items-center justify-center relative pb-[80px] p-3"
            >
                <img src="./RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png" alt="" width={996} height={484} />
                <p className="text-white text-[32px]" style={{ fontFamily: 'OVTreasure' }}>
                    La tua storia merita di essere raccontata con il sorriso giusto
                </p>
                <div className="flex flex-col w-full items-center p-1 mt-48 justify-center">
                    <Button onClick={() => console.log('ciao')}>Benvenuti</Button>
                </div>
                <div className="flex flex-col items-center w-full p-1 justify-center absolute bottom-3 ">
                    <ArrowDown onClick={() => scrollToSection('start')} />
                </div>
            </header>
            {/* Contenido principal */}
            <div className="flex flex-col w-full h-full  relative">
                {/* Navbar con prop isFixed */}
                <div className={`absolute top-0 flex flex-col w-full mt-3`}>
                    <Nav isFixed={isNavFixed} />
                </div>
                {/* Secciones de la página */}
                <section className="flex flex-col w-full pt-[137px] min-h-screen h-auto" id="start" >
                    <Presentation />
                </section>
                <section className="flex flex-col pt-[137px] h-auto" >
                    <OfferServices />
                </section>
                <section className="pt-[87px] pb-[87px] min-h-screen h-auto" >
                    <HistoryImages />
                </section>
                <section className=" pt-[137px] min-h-screen h-auto pb-20" id="about-me" >
                    <AboutMe />
                </section>
                <section className="pt-[87px] min-h-screen h-auto" id="contact" >
                    <h1>Contact</h1>
                </section>
                <section className="pt-[87px] min-h-screen h-auto"  >
                    <h1>Map</h1>
                </section>
                <section className="pt-[87px] min-h-screen h-auto" id="reviews" >
                    <h1>Reviews</h1>
                </section>
                <section className="pt-[87px] min-h-screen h-auto" id="faq" >
                    <h1>FAQ</h1>
                    <p>Contenido de la sección FAQ...</p>
                </section>
            </div>
        </div>
    );
}