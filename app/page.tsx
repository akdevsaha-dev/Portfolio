import { Navbar } from "@/components/ui/Navbar";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { SparklesCore } from "../components/ui/sparkles";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { HeroParallax } from "../components/ui/hero-parallax";
import { WavyBackground } from "../components/ui/wavy-background";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
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
    <HeroParallax products={products} />;
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-[80px] text-white font-bold inter-var text-center">
        My techstack
      </p>
      <p className="text-base md:text-xl mt-4 text-white font-semibold inter-var text-center">
        Here are few amazing technologies i have worked with and deep dive into
      </p>
      <div className="flex flex-row items-center justify-center mt-5 mb-10 w-full">
      <AnimatedTooltip items={stack} />
    </div>
    </WavyBackground>
  </div>
  </div>  
  );
}

const stack = [
  {
    id: 1,
    name: "HTML",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    id: 3,
    name: "Javascript",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
  },
  {
    id: 4,
    name: "MongoDB",
    image:
       "https://cdn.prod.website-files.com/6371f3e94a645947f33e2581/6371f3e94a6459e24e3e2d01_Partner_Logos_MongoDB.jpg",
  },
  {
    id: 5,
    name: "Express.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZkDdSEhC0GBuIXxqSVxu5OlO35teE_gLHQ&s",
  },
  {
    id: 6,
    name: "React.js",
    image:
      "https://assets.stickpng.com/thumbs/62a74dd1223343fbc2207d00.png",
  },
  {
    id: 7,
    name: "Node.js",
    image:
      "https://banner2.cleanpng.com/20180425/jrw/ave9tlfdy.webp",
  },
  {
    id: 8,
    name: "Next.js",
    image:
      "https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg",
  },
  {
    id: 9,
    name: "Typescript",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAyxDsXAv0DYruT0KSin2YgggqZCWTt2biQ&shttps://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
  },
  {
    id: 10,
    name: "Tailwind",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-mspyndicMBTk-KdKp96OZiaD2rkYLYzFQ&s",
  },
  {
    id: 11,
    name: "Postgres",
    image:
      "https://ih1.redbubble.net/image.5494718957.6127/st,small,507x507-pad,600x600,f8f8f8.jpg",
  },
  {
    id: 12,
    name: "Cloudfare Workers",
    image:
      "https://static-00.iconduck.com/assets.00/cloudflare-icon-2048x2048-k5hf9ugn.png",
  },
  {
    id: 13,
    name: "Docker",
    image:
      "https://banner2.cleanpng.com/20180802/ipp/c26b0dc2951a5195ae50c46f6be2544e.webp",
  },

  
];


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
