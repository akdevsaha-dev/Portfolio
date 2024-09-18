import Link from "next/link"

export const Navbar = () => {
    return <div className=" bg-black font-semibold text-white w-[40vw] z-50 h-[10vh] rounded-full flex items-center justify-center gap-8 top-10 fixed">
    <div className="cursor-pointer hover:text-[white]/[0.6]" >
         <Link href={"/"} target="_blank"> Home</Link>
    </div>
    <div className="cursor-pointer hover:text-[white]/[0.6]">
    <Link href={"/projects"} target="_blank" >
    Projects
    </Link> 
    </div>
    <div className="cursor-pointer hover:text-[white]/[0.6]">
    <Link href={"/contactme"}  target="_blank">
    Contact Me
    </Link>
    </div>
    </div>

}