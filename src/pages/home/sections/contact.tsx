import { Button } from "../../../components/ui/buttons"

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-3" >
            <form className="flex flex-col gap-10 p-6 lg:p-0 w-full lg:w-[80%] 2xl:w-[60%] justify-center items-center text-[#545454]" action="">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-40 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="">Nome</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] p-3 w-full" type="text" />
                    <label htmlFor="">Cognome</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] p-3 w-full" type="text" />
                    <label htmlFor="">E-mail</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] p-3 w-full" type="text" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="">Paese</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] p-3 w-full" type="text" />
                    <label htmlFor="">Provincia</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] p-3 w-full" type="text" />
                    <label htmlFor="">Città</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] p-3 w-full" type="text" />
                    <label htmlFor="">Data della cerimonia</label>
                    <input className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full" type="text" />
                    </div>
                </div>
                <label htmlFor="">Raccontami la tua storia d'amore!</label>
                <textarea name="" className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac]  rounded-[10px] min-h-[200px] p-3 w-full" id=""></textarea>
                <Button  variant="secondary" className="w-[275px]">Effettuare una prenotazione</Button>
            </form>

        </div>
    )
}

export default Contact