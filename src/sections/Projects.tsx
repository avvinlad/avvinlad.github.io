import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Music, CandlestickChart, Pi, Github } from "lucide-react";
import * as motion from "motion/react-client";
import { PROJECTS_TITLE, PROJECTS_SUBTITLE, GITHUB, PROJECTS } from "@/constants/localization";

const ICON_SIZE = 20;
const ICONS = [<Music size={ICON_SIZE} />, <CandlestickChart size={ICON_SIZE} />, <Pi size={ICON_SIZE} />];

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col px-8 justify-center mx-auto">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">{PROJECTS_TITLE}</h2>
                <h3 className="text-lg">{PROJECTS_SUBTITLE}</h3>
            </div>
            {/* DESKTOP */}
            <div className="hidden lg:flex justify-center mx-auto my-6 w-2/3 xl:w-full">
                <div className="flex">
                    <Carousel className="flex mx-auto">
                        <CarouselContent>
                            {PROJECTS.map((project) => (
                                <CarouselItem key={project.name}>
                                    <div className="p-2 h-full">
                                        <Card className="">
                                            <CardContent className="flex items-center justify-center">
                                                <div className="w-full p-8">
                                                    <div className="flex flex-row justify-between text-center mb-4">
                                                        <p className="text-3xl mb-3 font-bold">{project.name}</p>
                                                        <motion.div
                                                            whileHover={{ scale: 1.15 }}
                                                            whileTap={{ scale: 1.25 }}
                                                        >
                                                            <button className="flex border rounded-2xl px-4 py-2 justify-center items-center text-center">
                                                                <Github size={ICON_SIZE} />
                                                                <a
                                                                    href={project.link}
                                                                    target="_blank"
                                                                    className="ml-2 underline"
                                                                >
                                                                    {GITHUB}
                                                                </a>
                                                            </button>
                                                        </motion.div>
                                                    </div>
                                                    <div>
                                                        <div className="">
                                                            <p className="text-lg">{project.description}</p>
                                                            <ul className="grid gap-y-2 my-3 list-disc mx-8 lg:mx-12">
                                                                {project.points.map((point: string) => (
                                                                    <li>{point}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            {/* MOBILE */}
            <div className="flex flex-row my-6 mx-auto w-full lg:hidden">
                <Accordion className="w-full" type="single" defaultValue="item-1">
                    {PROJECTS.map((project, index) => {
                        return (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-x-4">
                                        <span className="p-2 border-2 rounded-xl">{ICONS[project.id]}</span>
                                        <span className="text-center text-xl font-bold">{project.name}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col justify-between w-full">
                                        {/* Text content */}
                                        <div className="">
                                            <p className="text-lg">{project.description}</p>
                                            <ul className="grid gap-y-2 my-3 list-disc mx-8 lg:mx-12">
                                                {project.points.map((point: string) => (
                                                    <li>{point}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Button */}
                                        <div className="flex flex-row justify-end p-4 mr-4">
                                            <button className="flex border rounded-2xl px-4 py-2 justify-center items-center text-center">
                                                <Github size={ICON_SIZE} />
                                                <a href={project.link} target="_blank" className="ml-2 underline">
                                                    {GITHUB}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
}
