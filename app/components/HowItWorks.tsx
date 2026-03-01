import { FaArrowRight, FaClipboardCheck, FaChartBar, FaHistory, FaLightbulb, FaLevelUpAlt } from "react-icons/fa";

const steps = [
    {
        icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
        title: "Attempt Mock",
        description: "Real NTA interface & pattern",
        color: "blue"
    },
    {
        icon: <FaChartBar className="text-indigo-600 text-2xl" />,
        title: "Get AI Analysis",
        description: "Deep insights into performance",
        color: "indigo"
    },
    {
        icon: <FaHistory className="text-blue-600 text-2xl" />,
        title: "Mistakes Saved",
        description: "Automatic error tracking",
        color: "blue"
    },
    {
        icon: <FaLightbulb className="text-indigo-600 text-2xl" />,
        title: "Revise",
        description: "Notes + ranker mentorship",
        color: "indigo"
    },
    {
        icon: <FaLevelUpAlt className="text-blue-600 text-2xl" />,
        title: "Improve Score",
        description: "Ready for the next attempt",
        color: "blue"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">How It Works</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Improvement Cycle</span>
                    </h1>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                {/* Step Circle */}
                                <div className={`w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-300 group-hover:-translate-y-1`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                            Step {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium leading-snug">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (Mobile/Tablet) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-gray-300">
                                        <FaArrowRight className="rotate-90 md:rotate-0 text-xl" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
