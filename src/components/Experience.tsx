import Image from "next/image";

import { CalendarDays } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: " Software Engineering Intern- DevOps", // TODO: Replace with actual role
        company: "Crest Data", // TODO: Replace with actual company name
        logo: "/company.png", // TODO: Replace with actual logo
        duration: "June 2023 - August 2023",
        description:` • Deployed and managed scalable cloud-based applications using AWS, Docker, Terraform, and Kubernetes, achieving 99.9% uptime and improving scalability.
        • Automated the provisioning of 50+ cloud resources using Terraform, decreasing deployment time and cuttingconfiguration errors by 30%, as validated by Jenkins logs over a 3-month period.
        • Created Docker images for 5 key applications and deployed them on Amazon ECS which can support 1,000+ daily active users with seamless scalability.
        • Implemented CI/CD pipelines using Jenkins, reducing build and deployment time from 2 hours to 1.2 hours. Increased deployment reliability as shown by a drop in failed deployments in Jenkins error logs.`,
        link: "https://techinnovators.com",
        images: [],
    },
    {
        role: "Software Engineering Intern- Front-end", // TODO: Replace with actual role
        company: "Grinders", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "May 2022 - August 2022",
        description:
            `• Collaborated with a team to design and develop user-friendly and responsive front-end interfaces for 6+ deep learning web applications using ReactJS.
 • Built 15+ UI components for displaying analysis diagrams, graphs, and charts for deep learning models to support real-time data visualization.
 • Created 10+ interactive user input forms and real-time output display components for deep learning models, improving data visualization.
 • Developed landing pages, contributor cards, and tech stack cards to enhance overall user engagement and platform accessibility, contributing to smoother user experience.`,
        link: "https://websolutions.com",
        images: [
           
        ],
    },
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                        {line}
                                        <br />
                                        </React.Fragment>
                                    ))}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}