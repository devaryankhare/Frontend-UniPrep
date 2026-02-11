import { FaUserGraduate } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";

export default function Feature(){
    return(
        <main className="max-w-6xl mx-auto py-12">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-6xl max-w-xl text-center text-black">Choose us because of our experience</h1>
                <p className="text-lg max-w-xl text-center text-neutral-800">Let{'\''}s nurture potential, empower minds, and foster growth through education and collaboration to shape a brighter future.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 justify-items-center">
                <div className="col-span-1 bg-white rounded-2xl shadow-xl p-6 w-fit flex flex-col gap-18">
                    <div className="p-4 rounded-full bg-blue-100 w-fit shadow-lg">
                        <FaUserGraduate className="text-blue-500 text-4xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl">Expert-led courses</h1>
                        <p className="text-neutral-800 text-md">Expert-led courses Gain insights from industry leaders in areas such as technology, business, and creative arts.</p>
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-2xl shadow-xl p-6 w-fit flex flex-col gap-18">
                    <div className="p-4 rounded-full bg-blue-100 w-fit shadow-lg">
                        <FaBagShopping className="text-blue-500 text-4xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl">Purchase Course</h1>
                        <p className="text-neutral-800 text-md">Unlock new career opportunities by learning from industry experts in various fields, including technology and business.</p>
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-2xl shadow-xl p-6 w-fit flex flex-col gap-18">
                    <div className="p-4 rounded-full bg-blue-100 w-fit shadow-lg">
                        <MdOutlineMenuBook className="text-blue-500 text-4xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl">Interactive learning</h1>
                        <p className="text-neutral-800 text-md">Engage with seasoned experts in diverse fields such as marketing, design, development, finance, and more.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}