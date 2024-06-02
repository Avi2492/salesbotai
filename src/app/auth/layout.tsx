import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Logo from "../components/Logo";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) {
    redirect("/");
  }
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] lg:w-full flex flex-col items-start p-6">
        <Logo />
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-[400px] overflow-hidden relative bg-cream flex-col pt-10 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I`&apos;`m your AI powered sales assistant, PitchBOT!
        </h2>
      </div>
    </div>
  );
};

export default Layout;
