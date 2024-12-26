import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import matter from "gray-matter"
import fs from "fs"
const Blog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
  const filePath = `content/${slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { content } = matter(fileContent)
  const HtmlContent = (await processor.process(content)).toString()

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: HtmlContent }}>
      </div>
    </MaxWidthWrapper>
  )
}

export default Blog
