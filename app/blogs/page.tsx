import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import BlogCard from '@/components/BlogCard'
import fs from "fs"
import matter from 'gray-matter';
import path from 'path';
const contentDir = fs.readdirSync("content", "utf-8");
const blogs = contentDir.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, 'utf-8')
  const { data } = matter(fileContent)
  const slug = path.basename(file, path.extname(file));
  return { slug, title: data.title, description: data.description, date: data.date, tags: data.tags }
})
const Blogs = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="flex item-center justify-center w-full text-4xl font-bold mb-3">
        My Blogs
      </h1>
      <main className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
        {blogs.map((blog, index) => (
          <BlogCard date={blog.date} title={blog.title}  tags={blog.tags} description={blog.description} slug={blog.slug} key={index}></BlogCard>
        ))}

      </main>
    </MaxWidthWrapper>
  )
}

export default Blogs
