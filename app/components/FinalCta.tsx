import Link from "next/link";

export default function FinalCta() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-cyan-100 to-blue-100 relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/40 blur-[80px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/40 blur-[80px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-6 leading-tight">
                    Start Your CUET Preparation Today
                </h1>

                <p className="text-xl md:text-2xl text-blue-800 font-medium mb-12 max-w-2xl mx-auto">
                    Practice smart. Fix mistakes. Improve every day.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 block text-center">
                        Attempt Free Mock
                    </Link>
                    <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-blue-600 backdrop-blur-sm border-2 border-cyan-200 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:border-white transition-all duration-300 transform hover:-translate-y-1 block text-center">
                        Join Mentorship
                    </Link>
                </div>
            </div>
        </section>
    );
}
