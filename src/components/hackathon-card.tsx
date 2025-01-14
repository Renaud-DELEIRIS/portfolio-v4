import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  technologies?: readonly string[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
  technologies,
}: Props) {
  return (
    <div className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage
            width={48}
            height={48}
            src={image}
            alt={title}
            className="object-contain"
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <div className="align-bottom mb-0.5 gap-1 inline-flex items-end">
          <h2 className="font-semibold leading-none">{title}</h2>
          {location && (
            <span className="text-[10px] leading-none text-muted-foreground">
              ({location})
            </span>
          )}
        </div>
        {technologies && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {technologies.map((tech, idx) => (
              <Badge key={idx} title={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {description && (
          <Markdown className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </Markdown>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge
                variant={"outline"}
                key={idx}
                title={link.title}
                className="flex gap-2"
              >
                {link.title}
                <ArrowUpRight size={16} />
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
