import cards from "../text/reviews-text.json";

const Reviews = () => {
    const columns: { id: number; title: string; category: string; year: number; rating: string; description: string; image: string; }[][] = [[], [], []];

    // Distribuir equitativamente las tarjetas en las 3 columnas
    cards.forEach((card, index) => {
        columns[index % 3].push(card);
    });

    return (
        <>
            <p className="text-[20px] italic text-[#545454] font-[LigthItalic]  mt-6 text-center">
                “Perché ogni storia d'amore merita di <br /> essere ricordata per sempre”
            </p>
            <h2 className="text-[#545454] text-[48px] mt-10 font-[Ovtreasure] text-center">Alcune recensioni dei miei adorabili clienti</h2>
            <p className="text-[20px] italic text-[#545454] mb-16 text-center font-[LigthItalic] "> Più di 10 anni in immagini</p>
            <div className="flex flex-row justify-center w-full gap-6">
                {columns.map((column, colIndex) => (
                    <div
                        key={colIndex}
                        className={`flex flex-col gap-6 ${colIndex === 0 || colIndex === 2 ? "mt-20" : ""}`}
                    >
                        {column.map(({ id, title, category, year, rating, description, image }) => (
                            <div key={id} className="flex flex-col p-4 rounded-lg bg-[#FFFDF5] border-2 border-[#CCB9AB] max-w-[400px] text-[#545454] gap-4">
                                <h2 className="text-[26px] text-[Ovtreasure]">{title}</h2>
                                <p className="text-[16px]">{description}</p>
                                <p>{category}</p>
                                {image && <img className="w-full rounded-lg" loading="lazy" src={image} alt={title} />}
                                <div className="w-full flex flex-row justify-between">
                                    <p>{year}</p>
                                    <span>{rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Reviews;
