'use client';
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Button } from "../../components/ui/buttons.tsx";
import { ArrowDown } from "../../components/ui/arrow-down.tsx";
import { Nav } from "../../components/layout/nav.tsx";
import Presentation from './sections/presentation.tsx';

// Carga diferida de secciones
const OfferServices = lazy(() => import('./sections/offer-services.tsx'));
const HistoryImages = lazy(() => import('./sections/history-images.tsx'));
const AboutMe = lazy(() => import('./sections/about-me.tsx'));
const Contact = lazy(() => import('./sections/contact.tsx'));
const MapPicker = lazy(() => import('./sections/map-picker.tsx'));

export default function Home() {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;
            setIsNavFixed(window.scrollY > headerRef.current.offsetHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = useCallback((sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div className="flex flex-col w-full h-full">
            <header
                id="home"
                ref={headerRef}
                className="flex flex-col bg-[url('/FOTOGRAFIAS/HEADER/Meliyabel-166.jpg')] min-h-screen w-full bg-cover items-center justify-center relative pb-20 p-3"
            >
                <img src="./RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png" loading="lazy" alt="Logo" width={996} height={484} />
                <p className="text-white text-2xl font-OVTreasure text-center">
                    La tua storia merita di essere raccontata con il sorriso giusto
                </p>
                <div className="flex flex-col w-full items-center p-1 mt-48">
                    <Button onClick={() => console.log('ciao')}>Benvenuti</Button>
                </div>
                <div className="absolute bottom-3 w-full flex justify-center">
                    <ArrowDown onClick={() => scrollToSection('start')} />
                </div>
            </header>
            <main className="flex flex-col w-full h-full">
                <Suspense fallback={<div className="text-center text-gray-500">Cargando...</div>}>
                    <section id="start" className="flex flex-col pt-[137px] min-h-screen relative">
                        <div className="absolute top-0 flex flex-col w-full mt-3">
                            <Nav isFixed={isNavFixed} />
                        </div>
                        <Presentation />
                    </section>
                    <section className="flex flex-col pt-[137px]">
                        <OfferServices />
                    </section>
                    <section className="pt-[87px] pb-[87px] min-h-screen">
                        <HistoryImages />
                    </section>
                    <section id="about-me" className="pt-[137px] min-h-screen pb-20">
                        <AboutMe />
                    </section>
                    <section id="contact" className="pt-[137px] min-h-screen">
                        <Contact />
                    </section>
                    <section className="pt-[87px] min-h-screen">
                        <MapPicker />
                    </section>
                    <section id="reviews" className="pt-[87px] min-h-screen">
                        <h1>Reviews</h1>
                    </section>
                    <section id="faq" className="pt-[87px] min-h-screen">
                        <h1>FAQ</h1>
                        <p>Contenido de la sección FAQ...</p>
                    </section>
                </Suspense>
            </main>
        </div>
    );
}
