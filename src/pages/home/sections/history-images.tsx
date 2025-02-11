import { Button } from "../../../components/ui/buttons";

const images = [
    "./FOTOGRAFIAS/5-images/1.png",
    "./FOTOGRAFIAS/5-images/2.png",
    "./FOTOGRAFIAS/5-images/3.png",
    "./FOTOGRAFIAS/5-images/4.png",
    "./FOTOGRAFIAS/5-images/5.png",
];

export const HistoryImages = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-3">
            <div className="flex flex-col items-center justify-center w-[80%]">
            <h3 className="text-center mb-10" style={{fontFamily: 'OVTreasure', fontSize: '38px', color: '#545454'}}>Storie in immagini</h3>
            <div className="flex flex-row w-full justify-center items-center p-6">
                {images.map((image, index) => (
                    <div key={index} className="flex ">
                        <img className="w-auto h-auto object-cover hover:scale-[101%] transition-all duration-300" src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            <Button className="w-[163px] mt-10">Vai alla galleria</Button>
            </div>
        </div>
    )
}