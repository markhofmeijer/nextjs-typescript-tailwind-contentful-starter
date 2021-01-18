import React from "react"
import remark from "remark"
import gfm from "remark-gfm"
import remark2rehype from "remark-rehype"
import rehype2react from "rehype-react"

import { IMarkdown } from "@/types/markdown"
import CustomLink from "./components/link"

const Markdown: React.FC<IMarkdown> = ({ src }) => {
  return remark()
    .use(gfm)
    .use(remark2rehype)
    .use(rehype2react, {
      createElement: React.createElement,
      components: {
        a: CustomLink,
      },
    })
    .processSync(src).result as React.ReactElement
}

export default Markdown
