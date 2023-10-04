import fs from 'fs';
import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypePrism from 'rehype-prism';
import readingTime from 'reading-time';
import remarkCodeTitles from './remark/remark-title';
import remarkExtractFrontmatter from './remark/remark-extract-fromtmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import matter from 'gray-matter';
import FrontMatter from '@/interfaces/FrontMatter';

export async function getFileBySlug({slug} : {slug: string}) {
  const mdxPath = path.join(process.cwd(), 'public/posts/', `${slug}.mdx`)
  const source = fs.readFileSync(mdxPath, 'utf8')

  let toc: string[] = []
  const { code, frontmatter } = await bundleMDX({
    source,
    // bundlePath: '/flutter/HelloNext/flutter.js',
    // cwd
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future. 
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkExtractFrontmatter,
      //   [remarkTocHeadings, { exportRef: toc }],
        
        remarkGfm,
        remarkCodeTitles,
      //   [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
      //   remarkImgToJsx,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
        
      //   rehypeKatex,
      //   [rehypeCitation, { path: path.join(root, 'data') }],
      //   [rehypePrismPlus, { ignoreMissing: true }],
      //   rehypePresetMinify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.ts': 'tsx'
      }
      options.target = 'es6'
      return options
    },
  })
  // readingTime(source).
  return {
    mdxSource: code,
    toc,
    frontMatter: {
      readingTime: readingTime(source),
      slug: slug,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? frontmatter.date : null,
    },
  }
}

export function getFrontmatters() : FrontMatter[]{
  const mdxPath = path.join(process.cwd(), 'public/posts/')
  const posts = fs.readdirSync('public/posts/')

  const matters = posts.map<FrontMatter>((file) => {
    const source = fs.readFileSync(mdxPath+file, 'utf8')
    const { data : frontmatter } = matter(source)
    const time = readingTime(source).text

    frontmatter['time'] = time
    return frontmatter as FrontMatter
  })


  return matters
}