import { FaGraduationCap } from "react-icons/fa";

const universities = [
    "DU",
    "BHU",
    "JNU",
    "AMU",
    "Central Universities"
];

export default function TargetUniversities() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Target Universities</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Prepare for Top Central Universities
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Prepare with the right strategy.
                    </p>
                </div>

                {/* Circle Container */}
                <div className="relative flex justify-center items-center py-12 md:py-24">
                    <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-blue-200/60">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-2xl"></div>

                        {/* Center Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-xl z-20">
                            <FaGraduationCap />
                        </div>

                        {/* Orbiting items */}
                        {universities.map((uni, idx) => {
                            const angleRad = ((idx * 360) / universities.length) * (Math.PI / 180);
                            const x = Math.sin(angleRad) * 50; // -50 to 50
                            const y = -Math.cos(angleRad) * 50; // -50 to 50

                            return (
                                <div
                                    key={idx}
                                    className="absolute z-10 whitespace-nowrap"
                                    style={{
                                        top: `calc(50% + ${y}%)`,
                                        left: `calc(50% + ${x}%)`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div className="bg-white px-5 py-3 md:px-8 md:py-4 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 font-bold text-gray-800 text-sm md:text-lg hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                                        {uni}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
