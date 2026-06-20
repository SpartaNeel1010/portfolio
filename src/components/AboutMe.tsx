import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    Software engineer focused on building reliable, scalable systems across agentic AI,
                    cloud infrastructure, and full-stack applications.
                </p>
            </CardContent>
        </Card>
    )
}
