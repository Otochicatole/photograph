const cards = [
    {
        id: 1,
        title: 'Proposta',
        description: 'Vuoi sorprendere ancora di più la tua coppia? Facciamo un servizio fotografico segreto del momento unico della proposta!',
        image: './RECURSOS/ICONOS/ICONOS-3D/Propose-1.png'
    },
    {
        id: 2,
        title: 'Civile',
        description: 'Devi aver coperto il giorno civile, e io posso aiutarti con quello. Può essere in chiesa, in comune, o anche alla festa.',
        image: './RECURSOS/ICONOS/ICONOS-3D/Propose.png'
    },
    {
        id: 3,
        title: 'Session',
        description: 'Scatta splendide foto con il tuo partner dove vuoi, nel modo che preferisci e con lo stile che preferisci!',
        image: './RECURSOS/ICONOS/ICONOS-3D/Calendar-1.png'
    },
    {
        id: 4,
        title: 'Previous',
        description: 'Seguo la sposa nel suo momento più importante: la preparazione. Seguo dall\'inizio fino alla festa.',
        image: './RECURSOS/ICONOS/ICONOS-3D/Hanger-1.png'
    },
    {
        id: 5,
        title: 'Festa',
        description: 'Oltre 200 foto dall\'inizio della festa fino all\'ultima goccia di divertimento!',
        image: './RECURSOS/ICONOS/ICONOS-3D/Wine-1.png'
    },
    {
        id: 6,
        title: 'Pregnancy',
        description: 'Sei una futura mamma? Posso immortalare il tuo momento speciale con una sessione bellissima e tranquilla.',
        image: './RECURSOS/ICONOS/ICONOS-3D/Balloon-1.png'
    },
    {
        id: 7,
        title: 'Content',
        description: 'Se hai bisogno di immagini perfette per dare un nuovo slancio al tuo marchio, posso aiutarti. Contattami!',
        image: './RECURSOS/ICONOS/ICONOS-3D/Screen-1.png'
    },
    {
        id: 8,
        title: 'Social',
        description: 'Forse un momento sociale? Mi occupo di laurea, eventi scolastici, piccole feste, compleanni dei bambini, riunioni dirigenziali.',
        image: './RECURSOS/ICONOS/ICONOS-3D/Chat-1.png'
    }
];


export const OfferServices = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full" >
            <div className="flex flex-col w-[80%] p-3">
                <h3 className="text-[#545454] text-[38px] mb-10"><span className="text-[#DCB3AD] font-bold">Ciò che offro</span> <br /> per il tuo
                    giorno più felice della vita</h3>
                <div className="grid grid-cols-4 gap-2 w-full">
                    {cards.map((card) => (
                        <div key={card.id} className="flex flex-row bg-[#FFFDF5] border border-[#798B95] gap-3 rounded-[15px] p-3 items-center justify-center">
                            <img className="w-[100px] h-[100px] object-cover rounded-lg" src={card.image} width={100} height={100} alt={card.title} />
                            <div>
                                <p style={{ fontFamily: 'OVTreasure', fontSize: '26px', color: '#545454' }}>{card.title}</p>
                                <p className="text-[#545454]">{card.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}