import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navlinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "PYQs",
      link: "#",
    },
    {
      title: "Materials",
      link: "#",
    },
    {
      title: "FAQs",
      link: "#",
    },
  ];

  return (
    <main className="flex items-center justify-center">
      <div className="max-w-6xl flex items-center justify-center border border-red-500">
        <Image height={64} width={64} alt="logo" src="/logo.png" />
        <ul className="text-black flex gap-6">
          {navlinks.map((item, index) => (
            <li key={index} className="">
              <Link href={item.link} className="">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
            
        </div>
      </div>
    </main>
  );
}
