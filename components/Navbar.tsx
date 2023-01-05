import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
    <>
        <div className="flex flex-wrap bg-gray-800 p-3 mb-3 justify-between items-center">
            <Link href={"/"} className="flex flex-row items-center gap-3">
                <Image src={"/logo.png"} className="rounded-full lg:w-[40px] lg:h-[40px]" width={28} height={28} alt={"Logo"} />
                <p className="text-white font-semibold text-sm lg:text-xl">forum frontend</p>
            </Link>
            <div className="flex flex-wrap gap-4 items-center">
                <Link className="navLink" href={"/"}>Home Page</Link>
                <Link className="navLink" href={"/"}>Contact</Link>
                <Link className="navLink" href={"/"}>Third Page</Link>
                <Link className="navLink" href={"/"}>Fourth Page</Link>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Image src="https://ui-avatars.com/api/?name=zRooter&background=random" className="rounded-full lg:w-[32px] lg:h-[32px]" width={28} height={28} alt={"Test"} />
                <div className="text-md text-white">zRooter</div>
                <button className="text-white ml-3 text-lg bg-gray-900/50 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-white/60 duration-500 hover:text-slate-900">Search</button>
            </div>
        </div>
    </>
    )
}