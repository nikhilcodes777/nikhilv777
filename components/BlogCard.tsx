import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from './ui/badge'
const BlogCard = ({ title, description, date, slug, tags }: { title: string, description: string, date: string, tags: string[], slug: string }) => {
  return (
    <div>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {tags.map((tag, index) => (
              <Badge className="mr-2 my-1 scale-[0.9]" key={index}>{tag}</Badge>
            ))}
            <p>{description}</p>
          </CardDescription>

        </CardHeader>

        <CardFooter className="flex justify-between mt-auto ">

          <div>{date}</div>
          <Button asChild>
            <Link href={`/blog/${slug}`}>
              Read Now
            </Link>
          </Button>

        </CardFooter>
      </Card>
    </div>
  )
}

export default BlogCard
