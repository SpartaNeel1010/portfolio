import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
    "Python", "JavaScript", "TypeScript", "Java", "Golang", "C/C++",
    "React", "Next.js", "Express.js", "Node.js", "Flask", "Django", "CSS", "HTML",
    "AWS", "GCP", "Terraform", "Docker", "Jenkins", "Kubernetes", "CI/CD", "Ansible",
    "LangChain", "LangGraph", "AutoGen", "LangSmith", "LlamaIndex", "Vector Databases",
    "PyTorch", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Seaborn",
    "MongoDB", "Redis", "DynamoDB", "PostgreSQL", "AWS RDS", "SQL", "MySQL"
]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
