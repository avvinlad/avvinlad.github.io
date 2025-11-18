import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import * as motion from "motion/react-client";
import { HERO_GREETING, HERO_TAGLINE, HERO_DESCRIPTION, HERO_CONNECT_BUTTON } from "@/constants/localization";

export default function HomePage() {
    return (
        <div
            id="homepage"
            className="flex flex-col h-screen text-center justify-center items-center mx-auto gap-y-4 leading-relaxed"
        >
            {/* ANIMATION AND HEADING */}
            <div className="waving-hand mb-4 text-7xl lg:text-8xl">👋🏽</div>
            <div>
                <TypeAnimation
                    sequence={[HERO_GREETING, 2000]}
                    wrapper="span"
                    speed={1}
                    className="font-bold text-center tracking-wide text-5xl lg:text-6xl"
                    repeat={Infinity}
                />
            </div>
            {/* TAGLINE */}
            <div className="flex flex-col">
                <span className="leading-relaxed text-2xl lg:text-4xl">{HERO_TAGLINE}</span>
                <br />
                <span className="leading-relaxed px-8 text-lg lg:text-xl">{HERO_DESCRIPTION}</span>
            </div>
            {/* CONNECT WITH ME */}
            <div className="my-8">
                <a href="mailto:avinlad@gmail.com">
                    <motion.div whileHover={{ scale: 1.15 }}>
                        <Button className="text-center p-8 text-base lg:text-lg">
                            <Send className="mr-2 h-8 w-8" />
                            {HERO_CONNECT_BUTTON}
                        </Button>
                    </motion.div>
                </a>
            </div>
        </div>
    );
}
