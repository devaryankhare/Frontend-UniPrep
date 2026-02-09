import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

export default function Hero(){
    return(
        <main className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col gap-8 justify-center items-center h-screen">
                <div className="bg-white flex gap-2 items-center justify-center rounded-full py-2 px-4">
                    <span className="flex flex-row items-center justify-center">
                        <TiStarFullOutline className="text-blue-500"/>
                        <TiStarFullOutline className="text-blue-500" />
                        <TiStarFullOutline className="text-blue-500"/>
                        <TiStarHalfOutline className="text-blue-500"/>
                        <TiStarOutline className="text-blue-500"/>
                    </span>
                    <span className="text-black font-semibold">4.5</span>
                    <span className="text-black">(120k Review)</span>
                </div>
                <h1 className="text-6xl max-w-2xl text-black text-center">Creating a better future by enabling minds</h1>
                <p className="max-w-2xl text-lg text-center text-neutral-800">Let{'\''}s nurture potential, empower minds, and foster growth through education and collaboration to shape a brighter future.</p>
            </div>
        </main>
    );
}