"use client";
import Image from "next/image";
import { navLinks, logo } from "../constants";
import { useState } from "react";
import Menus from "./Menus";

const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(true);

    const handleToggle = () => setToggle((prev) => !prev);
    console.log("toggle", toggle);

    return (
        <nav className="w-full py-6 flex justify-between items-center navbar">
            <Image src={logo} alt="hoobank" width={124} height={32} />
            <ul className="list-none sm:flex hidden justify-end items-center gap-6">
                {navLinks.map((nav) => (
                    <Menus key={nav.id} title={nav.title} />
                ))}
            </ul>
            <div className="list-none sm:hidden flex flex-1 justify-end items-center">
                <Image src={toggle ? "/icons/close.svg" : "/icons/menu.svg"} className="object-contain"
                    alt="menu" height={20} width={25} onClick={handleToggle} />
            </div>
            <div
                className={`absolute top-20 right-0 h-[100%] w-[40%] bg-primary text-white flex flex-col 
                    items-start p-6 transform ${toggle ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 sm:hidden`}
            >
                <ul className="list-none flex flex-col gap-4">
                    {navLinks.map((nav) => (
                        <Menus key={nav.id} title={nav.title} onClick={handleToggle} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar