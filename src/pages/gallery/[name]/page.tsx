import { useCallback, useEffect, useRef, useState } from "react";
import { getGalleryForName } from "../../../libs/get-gallery-for-name";
import { useLocation } from "react-router-dom";
import { Nav } from "../../../components/layout/nav";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/buttons";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../../../components/layout/footer";

interface GalleryItem {
    images: string[] | null;
}

export default function Page() {
    const [data, setData] = useState<GalleryItem[] | null>(null);
    const { pathname } = useLocation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

    const getNameFromPath = useCallback(() => {
        const segments = pathname.split("/");
        return decodeURIComponent(segments[segments.length - 1]);
    }, [pathname]);
    

    useEffect(() => {
        const getData = async () => {
            const galleryName = getNameFromPath();
            const encodedGalleryName = encodeURIComponent(galleryName); // Vuelve a codificar para seguridad
            const response = await getGalleryForName(encodedGalleryName);
            setData(response.gallery);
        };
        getData();
    }, [getNameFromPath]);
    

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    const getRandomHeight = (index: number) => {
        const heights = ["h-[150px]", "h-[200px]", "h-[300px]", "h-[250px]", "h-[350px]", "h-[500px]"];
        return heights[index % heights.length];
    };

    return (
        <>
            <header ref={headerRef} />
            <div className="absolute top-0 flex flex-col w-full mt-3" >
                <Nav isFixed={isNavFixed} />
            </div>
            <div className="container mx-auto p-4 mt-[140px] min-h-screen min-w-[250px] ">
                <div className="flex flex-col gap-10 lg:flex-row justify-between items-center mb-20">
                    <Link to="/gallery"><Button className="flex flex-row gap-3 items-center justify-center"><IoIosArrowBack />Galleria</Button></Link>
                    <h1 className="text-[26px] lg:text-[46px] xl:text-[96px] text-[#FFA629] font-[Ovtreasure]">{getNameFromPath()}</h1>
                    <div className="w-[150px]" />
                </div>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 transition-all duration-500 ease-in-out">
                    {data?.flatMap((item) =>
                        item.images?.map((image, index) => (
                            <div
                                key={index}
                                className={`break-inside-avoid overflow-hidden rounded-lg transition-all duration-300 ease-in-out ${getRandomHeight(index)}`}
                            >
                                <img
                                    src={image}
                                    alt={`Imagen ${index}`}
                                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))
                    )}
                </div>
                {selectedImage && (
                    <div style={{ zIndex: 99999 }} className="fixed inset-0 flex justify-center bg-black/50 backdrop-blur-2xl z-50 p-4 overflow-auto min-h-[400px] min-w-[250px] ">
                        <div className="relative flex w-auto h-auto  p-1 bg-[#cccccc] rounded-sm">
                            <button
                                className="flex absolute top-0 right-5 text-white cursor-pointer rounded-full hover:text-red-700 text-center text-6xl"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                            <img src={selectedImage} alt="Preview" className="w-full h-auto object-cover rounded-sm" loading="lazy" />
                        </div>
                    </div>
                )}
                <div className="flex-flex-col w-full  items-center justify-center text-center mt-60">
                    <h2 className="text-[32px] font-[Ovtreasure] text-[#545454]">Hai altra domanda? Srivimi!</h2>
                    <Button className="w-[163px] mt-10" variant="secondary">Inviare domanda</Button>
                    <p className=" italic text-[#545454] mt-40 mb-40 font-[LigthItalic] text-center p-3">“Perché i momenti passano, ma le <br /> emozioni rimangono”</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
