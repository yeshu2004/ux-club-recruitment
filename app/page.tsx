'use client'

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });


  return (
    <div className="h-full w-full relative">
      {/* Show this only on md+ screens */}
      <div className="hidden lg:flex fixed inset-0 z-50 bg-[#FFE3BB] flex-col items-center justify-center text-center px-10">
        <h1 className="text-[2.5rem] text-[#FC4503] font-[HelveticaNow] uppercase mb-4">
          Really? A big screen?
        </h1>
        <p className="text-[#FF9A0A] font-mono text-lg mb-6">
          We built this with tiny screens in mind. But hey, go big or go home, right?
        </p>
        <Link href="/form">
          <button className="border-2 border-[#FC4503] text-[#FC4503] rounded-full px-6 py-3 uppercase font-[HelveticaNow] hover:bg-[#FC4503] hover:text-white transition">
            Just take me to the form
          </button>
        </Link>
      </div>

      {/* Mobile view layout */}
      <div className="block lg:hidden">
        {/* your existing layout from earlier */}
      <div className="h-[100dvh] w-full relative overflow-hidden">
        <Image
          alt="Background"
          src="/bgimg.jpg"
          priority
          quality={100}
          fill
          className="object-cover z-0 object-[34%_center]"
        />
        <div className="absolute inset-0 bg-black/20 bg-opacity-50 z-10"></div>

        <div className="absolute bottom-5 z-10 text-[#FF9A0A] left-5">
          <div className="h-fit w-full overflow-hidden">
            <motion.div initial={{y: 100}}  animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.1 }} className="flex items-start gap-1">
              <h1 className="text-[5rem] text-[#FC4503] leading-[0.9] uppercase font-[HelveticaNow]">
                Let
              </h1>
              <h5 className="font-semibold font-mono">(issue:)</h5>
            </motion.div>
          </div>
          <div className="h-fit w-full overflow-hidden">
          <motion.h1 initial={{y: 100}}  animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} className="uppercase text-[5rem] text-[#FC4503] leading-[0.9] font-[HelveticaNow]">
            The
          </motion.h1>
          </div>
          <div className="h-fit w-full overflow-hidden">
            <motion.div initial={{y: 100}}  animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 1 }} className="uppercase flex items-end">
              <h1 className="text-[5rem] text-[#FC4503] leading-[0.9] font-[HelveticaNow]">
                work
              </h1>
              <h5 className="font-semibold font-mono">#2025</h5>
            </motion.div>
          </div>
          <div className="h-fit w-full overflow-hidden">
            <motion.h1 initial={{y: 100}}  animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 1.5 }} className="uppercase text-[5rem] text-[#FC4503] leading-[0.9] font-[HelveticaNow]">
              Speak
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE3BB] h-[100dvh] w-full">
        <div className="text-center pt-28 px-5">
          <motion.div initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }} ref={ref} className="text-[#FC4503] font-[HelveticaNow] uppercase leading-none">
            <h1 className="text-[2.7rem] leading-none">THE LOST</h1>
            <h1 className="text-[2.7rem] leading-none">art of</h1>
            <h1 className="text-[2.7rem] leading-none">teamwork</h1>
            <h1 className="text-xl leading-none">(jk, we found it)</h1>
          </motion.div>
          <div className="text-[#FF9A0A] leading-none pt-10 font-mono">
            <h1>Recruitment closes soon.</h1>
            <h1>Procrastinators beware.</h1>
          </div>
          <div className="text-[#FF9A0A] leading-none pt-10 font-mono flex items-start justify-between">
            <h3 className="text-xs">{"//01"}</h3>
            <div className="w-1/2 text-left">
              <h3 className="text-xs leading-none">
                In a world full of deadlines, bugs, and caffeine, we’re just a
                bunch of geeks trying to build cool stuff. Join the madness.
              </h3>
              <h3></h3>
            </div>
          </div>
          <Link href="/form">
            <button className="absolute bottom-5 left-5 right-5  md:w-auto border-2 border-[#FC4503] text-[#FC4503] rounded-full px-6 py-3 uppercase font-[HelveticaNow] text-sm sm:text-base flex items-center justify-center gap-4">
              <div>take me to the form </div>
              <div className="text-lg"><MdArrowOutward /></div>
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
