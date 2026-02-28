import { FaRegClock, FaChartLine, FaBook, FaEdit, FaUsers, FaUserTie } from "react-icons/fa";

export default function Feature() {
  const features = [
    {
      icon: <FaRegClock className="text-blue-600 text-3xl md:text-4xl" />,
      title: "Real CUET Mock Tests",
      description: "Full-length • NTA pattern • Timed",
    },
    {
      icon: <FaChartLine className="text-indigo-600 text-3xl md:text-4xl" />,
      title: "AI Performance Analysis",
      description: "Accuracy • Time tracking • Weak areas",
    },
    {
      icon: <FaBook className="text-blue-600 text-3xl md:text-4xl" />,
      title: "Auto Error Library",
      description: "Wrong questions saved automatically for revision",
    },
    {
      icon: <FaEdit className="text-indigo-600 text-3xl md:text-4xl" />,
      title: "Handwritten Digital Notes",
      description: "Quick revision • Concept clarity • Exam-focused",
    },
    {
      icon: <FaUsers className="text-blue-600 text-3xl md:text-4xl" />,
      title: "Doubt Solving by CUET Rankers",
      description: "Live sessions with top scorers",
    },
    {
      icon: <FaUserTie className="text-indigo-600 text-3xl md:text-4xl" />,
      title: "1:1 Mentorship Guidance",
      description: "Strategy • Subject selection • Preparation planning",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-linear-to-b from-transparent via-blue-50/30 to-transparent">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-12 md:mb-20">
        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Ecosystem</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl text-center text-gray-900 leading-[1.1] font-bold tracking-tight">
          Not Just Practice. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            A Complete CUET System.
          </span>
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex flex-col gap-6"
          >
            {/* Icon */}
            <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-blue-50 w-fit transition-colors duration-300">
              {feature.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h2 className="text-gray-900 text-xl font-bold leading-tight">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
