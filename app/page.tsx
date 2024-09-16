import { Navbar } from "@/components/ui/Navbar";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { SparklesCore } from "../components/ui/sparkles";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { div } from "framer-motion/m";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from 'next/image';
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white">
        Real time changes
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-gradient-to-r from-[#d54343] to-[#ea14ea] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-gradient-to-r from-[#4e4b4b] to-[#bfb5bf] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
  <div className="bg-black min-h-[200vh] w-full overscroll-contain overscroll-y-none"> 
  <div className="flex flex-col justify-center items-center w-full h-full">
    <Navbar />
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-[35rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="mt-[20vh] md:text-7xl text-5xl text-white font-bold text-center relative z-20 tracking-wider">
        Akdev Saha
      </h1>
      <div className="w-[90rem] h-40 relative mt-3">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="text-white text-xl w-[35vw] text-center">
      Software Engineer | FullStack Developer with Passion for Problem Solving
      </div>
    </div>
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-dark text-white dark:text-white flex items-center px-10 py-4"
      >
        <span>Checkout Resume</span>
      </HoverBorderGradient>
    </div>
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  </div>
  </div>  
  );
}
