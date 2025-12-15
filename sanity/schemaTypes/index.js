import { post } from "./post"
import { postCategory } from "./postCategory"
import { blockContentType } from "./blockContent"
import { author } from "./author"

export const schema = {
  types: [
    post,
    author,
    postCategory,
    blockContentType
  ],
}