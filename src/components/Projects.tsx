import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Cloud-IDE",
        description: "The Cloud IDE is an online integrated development environment designed to provide users with a full-featured coding workspace. This IDE allows users to create custom coding environments, share their work with collaborators, and persist code and configuration across sessions.",
        tech: "React",
        link: "https://github.com/SpartaNeel1010/CLOUD-IDE",
    },
    {
        title: "DocGPT- A Medical Chatbot",
        description: "DocGPT is a full-stack, industry-standard chatbot using a multi-agent RAG architecture with LangGraph and ColPali, enabling dynamic multi-index retrieval for text and image-based medical queries, optimized for accuracy and speed, with an intuitive ReactJS-based UI for seamless interaction and document management. ",
        tech: "Python",
        link: "https://github.com/SpartaNeel1010/DocGPT--A-Medical-Chatbot",
    },
    {
        title: "Build my own Redis",
        description: "A Redis clone from scratch in Go, replicating core data structures and functionality for in-memory data storage and retrieval.",
        tech: "Go",
        link: "#",
    },
    
]

const techColors = {
    "React": "bg-blue-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-yellow-500",
    "Go": "bg-green-500"
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}