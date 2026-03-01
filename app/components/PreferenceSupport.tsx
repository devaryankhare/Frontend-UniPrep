import { FaClipboardList, FaSortAmountUp, FaCalculator, FaExclamationTriangle } from "react-icons/fa";

const supportItems = [
    {
        title: "Selection Strategy",
        icon: <FaClipboardList className="text-blue-600 text-3xl" />,
        description: "Choose the right subjects and combinations for your target universities.",
    },
    {
        title: "Course Prioritization",
        icon: <FaSortAmountUp className="text-indigo-600 text-3xl" />,
        description: "Expert assistance to rank colleges and courses effectively.",
    },
    {
        title: "Score-based Preference Planning",
        icon: <FaCalculator className="text-blue-600 text-3xl" />,
        description: "Optimize choices dynamically based on your actual CUET scores.",
    },
    {
        title: "Avoid Costly Mistakes",
        icon: <FaExclamationTriangle className="text-indigo-600 text-3xl" />,
        description: "Prevent errors and technical mistakes that could cost you a seat.",
    }
];

export default function PreferenceSupport() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Preference Filling Support</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Smart Preference Filling Guidance
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Maximize your chances after results.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="p-4 rounded-2xl bg-white group-hover:bg-blue-50 w-fit transition-colors mb-6 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
