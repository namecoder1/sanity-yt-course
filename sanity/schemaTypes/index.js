import { post } from "./post"
import { postCategory } from "./postCategory"
import { blockContentType } from "./blockContent"

export const schema = {
  types: [
    post,
    postCategory,
    blockContentType
  ],
}
