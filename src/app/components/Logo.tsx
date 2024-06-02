import { RiLineChartLine, RiRobot2Fill } from "@remixicon/react";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="flex justify-center items-center mb-2">
      <div className="gap-2 flex items-center">
        <RiRobot2Fill size={40} className="text-orange-500" />
        <span className="text-2xl font-bold">Pitch</span>
      </div>
      <p className="text-2xl text-orange-500 font-extrabold">BOT</p>
    </div>
  );
};

export default Logo;
