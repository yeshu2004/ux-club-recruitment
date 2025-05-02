import Image from "next/image";

export default function Navabar() {
  return (
    <div className="fixed top-0 left-0 z-20 h-full w-full text-white p-5">
      <div className="flex items-center justify-between">
        <Image
          alt=""
          src={"/uxclub.png"}
          priority
          width={50}
          height={50}
          className=""
        />
        <Image
          alt=""
          src={"/VITBLogo.webp"}
          priority
          width={100}
          height={100}
          className="top-0 right-0"
        />
      </div>
    </div>
  );
}
