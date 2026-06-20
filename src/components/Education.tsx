import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
    {
        degree: "Master of Science in Software Engineering",
        school: "San Jose State University",
        detail: "GPA: 3.8/4.00 · San Jose, CA",
        duration: "August 2024 - May 2026",
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        school: "Nirma University",
        detail: "Ahmedabad, India",
        duration: "October 2020 - June 2024",
    },
];

export const Education = () => (
    <>
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <Card className="mb-6">
            <CardContent className="pt-6">
                <ul className="space-y-6">
                    {education.map((item) => (
                        <li key={item.degree} className="flex gap-3">
                            <GraduationCap className="size-5 mt-0.5 shrink-0 text-muted-foreground" />
                            <div>
                                <h3 className="font-semibold">{item.degree}</h3>
                                <p className="text-sm text-muted-foreground">{item.school}</p>
                                <p className="text-xs text-muted-foreground mt-1">{item.detail} · {item.duration}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </>
);
