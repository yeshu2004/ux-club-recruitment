import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-ull w-full relative block md:hidden">
      <div className="h-[100dvh] w-full relative overflow-hidden">
        {/* Background Image */}
        <Image
          alt="Background"
          src="/bgimg.jpg"
          priority
          quality={100}
          fill
          className="object-cover z-0 object-[34%_center]"
        />
        <div className="absolute inset-0 bg-black/20 bg-opacity-50 z-10"></div>

        {/* Overlay content */}
        <div className="absolute bottom-5 z-10 text-[#FF9A0A] left-5">
          <div className="flex items-start gap-1">
              <h1 className="text-[5rem] text-[#FC4503] leading-[0.9] uppercase font-[HelveticaNow]">Let</h1>
              <h5 className="font-semibold font-mono">(issue:)</h5>
          </div>
          <h1 className="uppercase text-[5rem] text-[#FC4503] leading-[0.9] font-[HelveticaNow]">The</h1>
          <div className="uppercase flex items-end">
            <h1 className="text-[5rem] text-[#FC4503] leading-[0.9] font-[HelveticaNow]">work</h1>
            <h5 className="font-semibold font-mono">#2025</h5>
          </div>
          <h1 className="uppercase text-[5rem] text-[#FC4503] leading-[0.9] font-[HelveticaNow]">Speak</h1>
        </div>
      </div>
      <div className="bg-[#FFE3BB] h-[100dvh] w-full">
        <div className="text-center pt-28 px-5">
          <div className="text-[#FC4503] font-[HelveticaNow] uppercase leading-none">
            <h1 className="text-[2.7rem] leading-none">THE LOST</h1>
            <h1 className="text-[2.7rem] leading-none">art of</h1>
            <h1 className="text-[2.7rem] leading-none">teamwork</h1>
            <h1 className="text-xl leading-none">(jk, we found it)</h1>
          </div>
          <div className="text-[#FF9A0A] leading-none pt-10 font-mono">
            <h1>Recruitment closes soon.</h1>
            <h1>Procrastinators beware.</h1>
          </div>
          <div className="text-[#FF9A0A] leading-none pt-10 font-mono flex items-start justify-between">
            <h3 className="text-xs">{'//01'}</h3>
            <div className="w-1/2 text-left">
              <h3 className="text-xs leading-none">In a world full of deadlines, bugs, and caffeine, we’re just a bunch of geeks trying to build cool stuff. Join the madness.</h3>
              <h3></h3>
            </div>
          </div>
          <Link href={'/'}>
          <button className="absolute bottom-5 left-5 w-[90vw] border-2 border-[#FC4503] text-[#FC4503] rounded-full px-10 py-3 uppercase font-[HelveticaNow]">take me to the form</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
