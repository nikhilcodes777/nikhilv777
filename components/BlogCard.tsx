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
const BlogCard = ({ title, description, slug }: { title: string, description: string, slug: string }) => {
  return (
    <div>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
          <p>{description}</p>
          </CardDescription>

        </CardHeader>
        <CardFooter className="flex justify-between mt-auto">
          <div>Date</div>
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
