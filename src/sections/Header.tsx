import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import { Menu } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    return (
        <header
            id="header"
            className={`sticky flex ${scrollDirection === "down" ? "hidden" : "visible"} top-0 lg:top-4`}
        >
            {/* DESKTOP MENU */}
            <nav id="desktop" className="hidden lg:flex w-fit mx-auto border-4 rounded-full px-4 py-2 bg-background">
                <div className="flex gap-4 text-center justify-center items-center">
                    <Image src={require("/public/images/pfp.png")} alt="Avin Lad" width={36} className="rounded-full" />
                    <NavItems />
                </div>
            </nav>

            {/* MOBILE MENU */}
            <nav id="mobile" className="flex flex-col w-full bg-background lg:hidden">
                <div className="flex w-full justify-between items-center p-4 xl:hidden">
                    <Image src={require("/public/images/pfp.png")} alt="Avin Lad" width={40} className="rounded-full" />
                    <Menu size={40} onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div
                    className={`flex flex-col transform transition-transform ${
                        menuOpen ? "opacity-100" : "opacity-0 hidden"
                    } xl:hidden w-full items-center text-lg`}
                    style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
                >
                    <div className="flex flex-col w-full text-right gap-4 pr-4">
                        <NavItems />
                    </div>
                </div>
            </nav>
        </header>
    );
}
