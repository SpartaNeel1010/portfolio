import Image from "next/image";

import { CalendarDays } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Software Engineer",
        company: "Bloomberg",
        logo: "/company.svg",
        duration: "June 2026 - Present",
        description: "",
        link: "https://www.bloomberg.com",
        images: [],
    },
    {
        role: "Software Engineering Intern",
        company: "Juniper Networks",
        logo: "/company.png",
        duration: "May 2025 - August 2025",
        description: `• Developed a full-stack agentic AI platform automating analysis of Customer Use Cases (CUCs), reducing manual research time and enabling faster, data-driven decision-making.
• Designed and implemented a stateful multi-agent LangGraph workflow with specialized agents for intent-based query routing and resolution.
• Created a pipeline to ingest 3,000+ CUCs and 50 network profiles, building a knowledge base with two-stage semantic retrieval and database-backed configuration storage.
• Engineered specialized tools and utilities that enable agents to execute tasks efficiently within the multi-agent workflow.`,
        link: "https://www.juniper.net",
        images: [],
    },
    {
        role: "Software Engineering Intern",
        company: "Crest Data",
        logo: "/company.svg",
        duration: "June 2023 - August 2023",
        description: `• Deployed and managed e-commerce microservices using Terraform, Docker, and Jenkins, helping ensure 99.9% uptime.
• Provisioned cloud resources automatically with Terraform, reducing setup time from hours to minutes.
• Containerized microservices with Docker to keep development, staging, and production environments consistent.
• Built a Jenkins CI/CD pipeline to streamline build, test, and deployment for faster, more reliable releases.`,
        link: "https://www.crestdata.ai",
        images: [],
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
                                {j.description && <p className="text-sm mt-2">{j.description.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                        {line}
                                        <br />
                                        </React.Fragment>
                                ))}</p>}
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
