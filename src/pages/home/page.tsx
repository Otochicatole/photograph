'use client';
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Button } from "../../components/ui/buttons.tsx";
import { ArrowDown } from "../../components/ui/arrow-down.tsx";
import { Nav } from "../../components/layout/nav.tsx";
import Presentation from './sections/presentation.tsx';
import Contact from './sections/contact.tsx';
import AboutMe from './sections/about-me.tsx';
import HistoryImages from './sections/history-images.tsx';
import OfferServices from './sections/offer-services.tsx';
import Reviews from './sections/reviews.tsx';
import FAQ from './sections/faq.tsx';

const MapPicker = lazy(() => import('./sections/map-picker.tsx'));
const Footer = lazy(() => import('../../components/layout/footer.tsx'));

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
        <div className="flex flex-col w-full h-full min-w-[350px] overflow-auto">
            <header
                id="home"
                ref={headerRef}
                className="flex flex-col bg-[url('/FOTOGRAFIAS/HEADER/Meliyabel-166.jpg')] min-h-screen w-full bg-cover items-center justify-center relative pb-20 p-3 overflow-hidden"
            >
                <img className='w-full lg:w-[996px] lg:h-[484px]' src="./RECURSOS/LOGOTIPO/Recurso 2LOGO-IG-2.png" loading="lazy" alt="Logo"/>
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
            <main className="flex flex-col w-full h-full pb-40">
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
                    <section className="pt-[87px] pb-[87px] ">
                        <HistoryImages />
                    </section>
                    <section id="about-me" className="pt-[137px] min-h-screen pb-20">
                        <AboutMe />
                    </section>
                    <section id="contact" className="pt-[137px] min-h-screen">
                        <Contact />
                    </section>
                    <section className="pt-[137px] min-h-screen">
                        <MapPicker />
                    </section>
                    <section id="reviews" className="pt-[137px] min-h-screen">
                        <Reviews />
                    </section>
                    <section id="faq" className="pt-[137px] min-h-screen">
                        <FAQ />
                    </section>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
