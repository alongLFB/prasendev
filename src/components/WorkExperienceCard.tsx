import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons, getCompanyLogo } from "@/components/icons";

interface WorkExperienceProps {
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    achievements?: string[];
    skills?: string[];
    companyLogo?: React.ReactElement | null;
    companyWebsite?: string;
    department?: string;
    links?: readonly {
        logoName: string;
        logoType: string;
        src?: string;
        linkName: string;
        href: string;
    }[];
    className?: string;
}

export function WorkExperienceCard({
    company,
    position,
    duration,
    location,
    description,
    achievements,
    skills,
    companyLogo,
    companyWebsite,
    department,
    links,
    className,
}: WorkExperienceProps) {
    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            }
        >
            <div className="flex items-center p-4">
                {companyLogo && (
                    <Link
                        href={companyWebsite || "#"}
                        target="_blank"
                        className="mr-4 flex-shrink-0"
                    >
                        {companyLogo}
                    </Link>
                )}
                <div>
                    <CardTitle className="text-lg">{position}</CardTitle>
                    <div className="mt-1 text-sm font-medium">{company}</div>
                    {department && (
                        <div className="text-xs text-muted-foreground">{department}</div>
                    )}
                </div>
            </div>

            <CardHeader className="px-4 py-2 pt-0">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3 w-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        {duration}
                    </div>
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3 w-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {location}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col px-4 py-2">
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {description}
                </Markdown>

                {achievements && achievements.length > 0 && (
                    <div className="mt-3">
                        <h4 className="mb-1 text-xs font-medium"></h4>
                        <ul className="ml-4 list-disc text-xs text-muted-foreground">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="mt-1">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {skills && skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                        {skills.map((skill) => (
                            <Badge
                                className="px-2 py-0 text-[10px]"
                                variant="secondary"
                                key={skill}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>

            <CardFooter className="mt-auto px-4 pb-4">
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {links.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                                    {/* {getCompanyLogo({ logoName: link.logoName, logoType: link.logoType as "svg" | "image" })} */}
                                    {/* {link.logoName} */}
                                    {link.linkName}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}