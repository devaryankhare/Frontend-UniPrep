import { FaUniversity, FaUsers, FaBookOpen, FaCompass } from "react-icons/fa";

const supportItems = [
    {
        title: "College Transition Guidance",
        icon: <FaUniversity className="text-blue-600 text-3xl" />,
        description: "Smooth onboarding into university life with expert tips and advice.",
    },
    {
        title: "Peer Community Access",
        icon: <FaUsers className="text-indigo-600 text-3xl" />,
        description: "Connect with seniors and peers in your target colleges.",
    },
    {
        title: "Academic Planning Help",
        icon: <FaBookOpen className="text-blue-600 text-3xl" />,
        description: "Guidance on choosing minors, electives, and managing coursework.",
    },
    {
        title: "Career Direction Sessions",
        icon: <FaCompass className="text-indigo-600 text-3xl" />,
        description: "Early insights into internships, placements, and further studies.",
    }
];

export default function AfterAdmissionSupport() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">After-Admission Support</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        We Support You Even After Admission
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Your journey doesn&apos;t end with the exam.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-blue-50 w-fit transition-colors mb-6 shadow-sm">
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
