import { text } from "../text/about-me-text";

export const AboutMe = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center" >
            <h2 className="text-[#545454] text-[38px] mb-16" style={{ fontFamily: 'OVTreasure' }}>Scopri la fotografa</h2>
            <div className="flex flex-row items-center max-w-[800px] justify-center gap-3 ">
                <div className="flex flex-col min-w-[300px] min-h-[440px] relative">
                    <img className="absolute -top-29 -left-26 rotate-y-180 z-0" src="/public/RECURSOS/hoja1.png" alt="" />
                    <img className="w-[300px] h-[440px] min-w-[300px] min-h-[440px] z-10 object-cover rounded-[10px]  drop-shadow-lg" src="/public/FOTOGRAFIAS/FOTOGRAFO/1.jpg" alt="" width={300} height={440} />
                </div>
                <div className="flex flex-col h-full w-full p-3 ">
                    {text.imgText}
                </div>
            </div>
            <br />
            <div className="flex flex-col items-center justify-center w-[400px] mt-26 relative ">
                <img className="absolute rotate-99 z-0 opacity-50 right-20" src="/public/RECURSOS/hoja2.png" alt="" width={124} height={230} />
                <h2 className="text-[#545454] text-[38px] z-10" style={{ fontFamily: 'OVTreasure' }}>La mia filosofia</h2>
            </div>
            <div className="flex flex-row justify-between gap-3 w-[60%] mt-10">
                <div className="flex flex-col max-w-[366px] text-center">
                    <h2 className="text-[#798B95] text-[38px] z-10" style={{ fontFamily: 'OVTreasure' }}>Missione</h2>
                    {text.missioneText}
                </div>
                <div className="flex flex-col max-w-[366px] text-center">
                    <h2 className="text-[#798B95] text-[38px] z-10" style={{ fontFamily: 'OVTreasure' }}>Visione</h2>
                    {text.visioneText}
                </div>
            </div>
            <div className="flex flex-row items-center justify-center w-[850px] gap-16 mt-36 ">
                <h2 className="text-[#798B95] text-[38px] z-10" style={{ fontFamily: 'OVTreasure' }} >Valori</h2>
                {text.valoriText}
            </div>
            <samp className="text-[20px] font-[LigthItalic] italic text-[#545454] mt-40 text-center">“Fotografie che parlano il <br /> linguaggio del cuore”</samp>

            <h2 className="text-[#545454] text-[38px] mb-16 mt-40" style={{ fontFamily: 'OVTreasure' }}>Perché io?</h2>
            <div className="flex flex-row items-center max-w-[1000px] justify-center gap-55 ">
                <div className="flex flex-col min-w-[300px] min-h-[440px] relative">
                    <img className="absolute -top-23 -left-38  z-0" src="/public/RECURSOS/hoja3.png" alt="" />
                    <img className="absolute -bottom-16 -right-3 rotate-135 w-[147px] h-[261px]  z-0" src="/public/RECURSOS/hoja1.png" alt="" />
                    <img className="w-[300px] h-[440px] min-w-[300px] min-h-[440px] z-10 object-cover rounded-[10px]  drop-shadow-lg" src="/public/FOTOGRAFIAS/FOTOGRAFO/1.jpg" alt="" width={300} height={440} />
                </div>
                <div className="flex flex-col h-full w-full p-3 ">
                    {text.parcheIoText}
                </div>
            </div>
        </div>
    )
}