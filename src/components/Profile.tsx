import Link from "next/link";
import Image from "next/image";

import { FaDochub } from "react-icons/fa6";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const socials = [
    {
        name: "Github",
        link: "https://github.com/SpartaNeel1010",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/nshah1010",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "Resume",
        link: "./Resume.pdf",
        icon: <FaDochub className="size-4" />
    },
    {
        name: "Email",
        link: "mailto:shahneel1309@gmail.com",
        icon: <FaEnvelope className="size-4" />
    },
    {
        name: "Phone",
        link: "tel:+16695774136",
        icon: <FaPhone className="size-4" />
    },
]

export const Profile = () => {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                        <Image
                            width={150}
                            height={150}
                            quality={100}
                            src="/avatar.jpg"
                            alt="Profile Picture"
                            className="rounded-full size-12 md:w-full h-auto lg:h-65 object-cover border-2"
                        />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-bold md:mt-4 text-xl md:text-2xl">Neel Shah</h1>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Software Engineer
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        New York, NY · Building practical software and intelligent systems.
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        {/* TODO: Add resume link */}
                        {/* or link to schedule a meeting using Calendly or Cal*/}
                        <Link
                            target="_blank"
                            href="mailto:shahneel1309@gmail.com"
                            className="font-semibold"
                        >
                            EMAIL ME
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            const label = s.name === "Email"
                                ? "shahneel1309@gmail.com"
                                : s.name === "Phone"
                                    ? "+1 (669) 577-4136"
                                    : `/${s.link.split('/').filter(Boolean).pop()}`
                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    aria-label={`${s.name} Logo`}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        {label}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
