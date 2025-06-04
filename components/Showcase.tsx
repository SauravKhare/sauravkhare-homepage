import Link from 'next/link';

import { Badge } from '@/components/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import Paragraph from '@/components/Paragraph';
import { Projects } from '@/constants';

export default function Showcase() {
  return (
    <div className="mt-6">
      {Projects.map((item) => (
        <Card
          key={item.name}
          className="bg-transparent h-full border-none mb-12"
        >
          <CardHeader>
            <CardTitle>
              <Link
                href={item.link}
                target="_blank"
                className="font-space-grotesk text-white duration-500 hover:text-yellow-500"
              >
                {item.name}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph classname="font-inter font-normal text-zinc-500 mt-3">
              {item.description}
            </Paragraph>
          </CardContent>
          <CardFooter className="flex flex-wrap mt-3">
            {item.tech.map((a) => (
              <Badge
                key={a}
                variant="outline"
                className="text-white/40 font-geist-mono bg-zinc-800 px-3 border-zinc-900 border-2 mr-1"
              >
                {a}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
