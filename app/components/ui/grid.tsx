import Image from "next/image";

export default function Grid(){
    return(
        <main className="flex flex-wrap">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Image src="/team/male.jpg" className="rounded-2xl" height={164} width={164} alt="person" />
                    <Image src="/team/female.jpg" className="rounded-2xl" height={164} width={164} alt="person" />
                </div>
                <div className="bg-orange-300 rounded-2xl flex flex-col gap-4 p-6">
                    <h1 className="text-black text-6xl font-semibold">50+</h1>
                    <span className="text-xl text-black">Worldwide Students</span>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </main>
    );
}