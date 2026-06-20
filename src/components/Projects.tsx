import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Nit — Custom Version Control System",
        description: "Built a Git-like version control system in C/C++ with init, add, commit, log, and status. It uses SHA-1 content hashing and a custom object store for deduplicated blobs, commit snapshots, and reliable history traversal.",
        tech: ["C/C++", "File I/O", "SHA-1 Hashing"],
    },
    {
        title: "Distributed Video Encoding System",
        description: "Implemented a fault-tolerant master-worker video encoding pipeline with gRPC scheduling, Raft-inspired leader election and heartbeats, and FFmpeg keyframe-aware segmentation for parallel processing.",
        tech: ["Python", "gRPC", "Raft", "FFmpeg", "Docker", "Kubernetes"],
    },
    {
        title: "Collaborative Cloud IDE",
        description: "Designed a real-time collaborative coding platform for up to 100 concurrent users, with isolated Kubernetes pods per project, ingress-based routing, and WebSocket-powered editing and code execution.",
        tech: ["MERN", "Docker", "Kubernetes", "WebSocket"],
    },
]

const techColors = {
    "Python": "bg-yellow-500",
    "C/C++": "bg-blue-500",
    "MERN": "bg-green-500",
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
                                <h3 className="font-semibold">{p.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech[0] as keyof typeof techColors] ?? "bg-slate-500"
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech.join(" · ")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
