"use client";
import Logo from "./components/Logo";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full justify-center items-center">
        <div className="md:text-8xl font-bold text-center m-4">
          <span className="mb-4 py-4">
            <Logo />
            Hi, I&apos;m your AI powered sales assistant,
          </span>
          <span className="text-orange-600 text-6xl mt-6">
            <Typewriter
              options={{
                strings: [
                  "Lead Generation",
                  "Sales Optimization",
                  "24/7 Support",
                  "Conversion Boost",
                  "Sales Efficiency",
                  "Revenue Growth",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
}
