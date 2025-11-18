import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import * as Icons from "../lib/DevIcons";
import * as motion from "motion/react-client";
import { ABOUT_ME_TITLE, ABOUT_ME_SUBTITLE, ABOUT_ME } from "@/constants/localization";

export const metadata: Metadata = {
    title: "About | Avin Lad"
};

const ICON_SIZE: number = 26;

interface IconLabelProps {
    icon: (size: number) => JSX.Element;
    label: string;
    size?: number;
}

const IconLabel: React.FC<IconLabelProps> = ({ icon, label, size = ICON_SIZE }) => {
    return (
        <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-x-2 p-1 m-1">
            {icon(size)} {label}
        </motion.div>
    );
};

const LANGUAGES = [
    { icon: Icons.GetReactIcon, label: "React" },
    { icon: Icons.GetTypeScriptIcon, label: "Typescript" },
    { icon: Icons.GetNextJSIcon, label: "Next.js" },
    { icon: Icons.GetDockerIcon, label: "Docker" },
    { icon: Icons.GetCSharpIcon, label: "C#" },
    { icon: Icons.GetDotNetCoreIcon, label: ".NET" },
    { icon: Icons.GetPythonIcon, label: "Python" },
    { icon: Icons.GetJavaIcon, label: "Java" }
];

export default function About() {
    return (
        <div id="about" className="flex flex-col px-8 justify-center mx-auto">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">{ABOUT_ME_TITLE}</h2>
                <h3 className="text-lg">{ABOUT_ME_SUBTITLE}</h3>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="py-6 lg:mr-16">
                    <p>
                        {ABOUT_ME.intro}{" "}
                        <a className="underline font-semibold" href={ABOUT_ME.currentCompanyUrl} target="_blank">
                            {ABOUT_ME.currentCompany}
                        </a>
                        {ABOUT_ME.rest}
                        <br />
                        {ABOUT_ME.technologies}
                    </p>
                    <div className="flex justify-center items-center">
                        <ul className="grid grid-cols-2 my-4 list-none gap-x-32 xl:gap-x-48 ">
                            {LANGUAGES.map((language) => {
                                return <IconLabel icon={language.icon} label={language.label} />;
                            })}
                        </ul>
                    </div>
                    <p>{ABOUT_ME.hobbies}</p>
                </div>
                <div className="min-w-fit self-center drop-shadow-2xl">
                    <Image
                        src={require("/public/images/me.jpg")}
                        alt="avinlad"
                        width={200}
                        className="rounded-3xl md:w-64 xl:w-80"
                    />
                </div>
            </div>
        </div>
    );
}
