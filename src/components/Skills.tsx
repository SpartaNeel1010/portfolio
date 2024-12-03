import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "C", "SQL", "HTML", "CSS", "TailwindCSS", "NextJS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "PostgreSQL", "Git", "Docker", "Kubernetes","Terraform","Jenkins","AWS","GCP" ,"Linux", "Windows","Tensorflow", "Langchain", "Numpy", "PyTorch", "Keras", "PySpark","Computer Vision", "Natural Language Processing", "Large Language Models"," Data Analysis","Deep Neural Networks", "Retrieval Augmented Generation"]

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