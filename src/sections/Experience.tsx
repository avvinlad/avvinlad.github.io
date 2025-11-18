import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EXPERIENCE_TITLE, EXPERIENCE_SUBTITLE, EXPERIENCE_JOBS } from "@/constants/localization";

export const metadata: Metadata = {
    title: "About | Avin Lad"
};

export default function Experience() {
    return (
        <div id="experience" className="flex flex-col px-8 justify-center mx-auto">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">{EXPERIENCE_TITLE}</h2>
                <h3 className="text-lg">{EXPERIENCE_SUBTITLE}</h3>
            </div>
            <div className="flex flex-row my-6 mx-auto lg:w-11/12">
                <Accordion className="w-full" type="single" defaultValue="item-1">
                    {EXPERIENCE_JOBS.map((job, index) => {
                        return (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger>
                                    <div className="flex items-center w-full">
                                        <Image
                                            src={require(`/public/images/${job.imagePath}`)}
                                            alt={job.name}
                                            width={50}
                                            className="rounded-full"
                                        />
                                        <div className="ml-4 text-xl flex justify-between w-full mr-4">
                                            <span>
                                                {job.name} - {job.jobTitle}
                                            </span>
                                            <span>{job.date}</span>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="lg:mx-16">
                                        <ul className="grid gap-y-2 my-3 list-disc mx-6">
                                            {job.description.map((descPoint: string) => (
                                                <li>{descPoint}</li>
                                            ))}
                                        </ul>
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
