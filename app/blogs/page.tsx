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
  return { slug, ...data }
})
const Blogs = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="">
        My Blogs
      </h1>
      <main className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
        {blogs.map((blog, index) => (
          <BlogCard title={blog.title} description={blog.description} slug={blog.slug} key={index}></BlogCard>
        ))}

      </main>
    </MaxWidthWrapper>
  )
}

export default Blogs
