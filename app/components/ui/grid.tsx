import FadeCarousel from "./carousel";

export default function Grid() {
  return (
    <main className="flex flex-col gap-6 w-full">
      <div className="flex flex-row gap-6 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 flex-wrap">
            <img
              src="https://i.pravatar.cc/100?img=12"
              className="rounded-2xl"
              height={164}
              width={164}
              alt="person"
            />
            <img
              src="https://i.pravatar.cc/100?img=13"
              className="rounded-2xl"
              height={164}
              width={164}
              alt="person"
            />
          </div>
          <div>
            <div className="bg-linear-to-br from-orange-200 to-orange-300 min-h-[260px] lg:h-[34vh] rounded-2xl flex flex-col justify-between p-6">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/100?img=1",
                  "https://i.pravatar.cc/100?img=2",
                  "https://i.pravatar.cc/100?img=3",
                  "https://i.pravatar.cc/100?img=4",
                  "https://i.pravatar.cc/100?img=5",
                  "https://i.pravatar.cc/100?img=7",
                ].map((src, i) => (
                  <img
                    key={i}
                    width={10}
                    height={10}
                    src={src}
                    alt="user avatar"
                    className="w-10 h-10 rounded-full border-2 border-orange-300 object-cover"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-black text-6xl font-semibold">50+</h1>
                <span className="text-xl text-black">Worldwide Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade carousel column */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[380px] lg:h-[420px]">
          <FadeCarousel
            interval={5}
            slides={[
              {
                src: "/colleges/college1.jpeg",
                title: "SRCC, New Delhi",
              },
              {
                src: "/colleges/college2.jpeg",
                title: "JNU, New Delhi",
              },
              {
                src: "/colleges/college3.webp",
                title: "DU, New Delhi",
              },
            ]}
          />
      </div>
    </main>
  );
}
