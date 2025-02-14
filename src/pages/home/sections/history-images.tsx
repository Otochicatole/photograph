import { memo, Suspense, lazy } from "react";
import { Button } from "../../../components/ui/buttons";

const LazyImage = lazy(() => import("./lazy-imports/lazy-image"));

const images = [
    "./FOTOGRAFIAS/5-images/1.png",
    "./FOTOGRAFIAS/5-images/2.png",
    "./FOTOGRAFIAS/5-images/3.png",
    "./FOTOGRAFIAS/5-images/4.png",
    "./FOTOGRAFIAS/5-images/5.png",
];

const HistoryImages = memo(() => {
    return (
        <div className="flex flex-col items-center w-full  lg:p-3">
            <div className="flex flex-col items-center w-full lg:w-[95%] 2xl:w-[80%]">
                <h3 className="text-center mb-10 font-ovtreasure text-[38px] text-[#545454]">
                    Storie in immagini
                </h3>
                <div className="flex w-full justify-center items-center  lg:p-6">
                    {images.map((image, index) => (
                        <Suspense key={index} fallback={<div className="w-[20%] h-auto bg-gray-200 rounded-lg"></div>}>
                            <LazyImage src={image} alt={`Image ${index}`} />
                        </Suspense>
                    ))}
                </div>
                <Button className="w-[163px] mt-10">Vai alla galleria</Button>
            </div>
        </div>
    );
});

export default HistoryImages;
