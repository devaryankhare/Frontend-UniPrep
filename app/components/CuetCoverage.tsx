import { FaGlobeAmericas, FaLanguage, FaListUl, FaHistory, FaCheckCircle } from "react-icons/fa";

const coverageItems = [
    {
        title: "Domain Subjects",
        icon: <FaGlobeAmericas className="text-blue-600 text-3xl" />,
        description: "Complete syllabus coverage for Science, Commerce & Humanities.",
    },
    {
        title: "English Language",
        icon: <FaLanguage className="text-indigo-600 text-3xl" />,
        description: "Vocabulary, Grammar & Reading Comprehension mastery.",
    },
    {
        title: "General Test (GAT)",
        icon: <FaListUl className="text-blue-600 text-3xl" />,
        description: "Quantitative Aptitude, Logical Reasoning & General Awareness.",
    },
    {
        title: "Previous Year Questions",
        icon: <FaHistory className="text-indigo-600 text-3xl" />,
        description: "Real questions from 2022, 2023, and 2024 CUET papers.",
    },
    {
        title: "Structured Mock Series",
        icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
        description: "Subject-wise and Full-length mocks based on latest NTA pattern.",
    },
];

export default function CuetCoverage() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">All-in-One Prep</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Complete CUET Coverage
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Everything in one place.
                    </p>
                </div>

                {/* Coverage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coverageItems.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group ${index === coverageItems.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-blue-50 w-fit transition-colors mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}

                    {/* Custom CTA Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center text-white lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                        <p className="opacity-90 mb-6">Get access to all subjects and mocks instantly.</p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
