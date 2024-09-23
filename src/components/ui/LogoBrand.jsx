import Image from "next/image";
import React from "react";

function LogoBrand() {
  return (
    <div className="w-[19px] h-[28px]">
      <Image
        width={19}
        height={30}
        quality={100}
        className="w-full h-full object-cover object-center"
        src={"/logo.png"}
      />
    </div>
  );
}

export default LogoBrand;
