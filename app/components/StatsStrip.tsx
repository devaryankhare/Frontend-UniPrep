import { FaUsers, FaUserTie, FaQuestionCircle, FaFileAlt } from "react-icons/fa";

const stats = [
    {
        icon: <FaUsers className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
        value: "1000+",
        label: "CUET Aspirants",
    },
    {
        icon: <FaUserTie className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
        value: "50+",
        label: "Domain Mentors",
    },
    {
        icon: <FaQuestionCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
        value: "10,000+",
        label: "Questions Practiced",
    },
    {
        icon: <FaFileAlt className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
        value: "Real",
        label: "CUET Pattern Mocks",
    },
];

export default function StatsStrip() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12 relative z-20">
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center text-center p-2 rounded-2xl transition-all duration-300 hover:bg-gray-50/50 group ${index !== stats.length - 1 ? "md:border-r border-gray-100" : ""
                                }`}
                        >
                            <div className="mb-3 p-3 rounded-xl bg-gray-50 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                {stat.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
