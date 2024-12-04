import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "lucide-react";

interface VideoCardProps {
  video: {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    date: string;
  };
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={video.url} target="_blank" rel="noopener noreferrer">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative group">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={500}
            height={280}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayIcon className="w-12 h-12 text-white" />
          </div>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg">{video.title}</CardTitle>
          <time className="text-sm text-muted-foreground">
            {formatDate(video.date)}
          </time>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground">{video.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
