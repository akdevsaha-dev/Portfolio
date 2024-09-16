import { div } from "framer-motion/client"

export const Navbar = () => {
    return <div className=" bg-black font-semibold border  border-gray-800 text-white w-[40vw] z-50 h-[10vh] rounded-full flex items-center justify-center gap-8 top-10 fixed">
    <div className="cursor-pointer hover:text-[white]/[0.9]">
        Home
    </div>
    <div className="cursor-pointer hover:text-[white]/[0.9]">
        Projects
    </div>
    <div className="cursor-pointer hover:text-[white]/[0.9]">
        Contact Me
    </div>
    </div>

}