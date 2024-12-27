import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code'
import { unified } from 'unified'
import matter from "gray-matter"
import fs from "fs"
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/OnThisPage'
const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "rose-pine",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],

    })
    .use(rehypeAutolinkHeadings)
  const filePath = `/public/content/${slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { content } = matter(fileContent)
  const HtmlContent = (await processor.process(content)).toString()

  return (
    <MaxWidthWrapper className=" prose dark:prose-invert flex ">
      <article className="px-12 md:px-16 " dangerouslySetInnerHTML={{ __html: HtmlContent }} />
      <OnThisPage className="text-sm w-[50%]" htmlContent={HtmlContent} />
    </MaxWidthWrapper>
  )
}

export default Blog
