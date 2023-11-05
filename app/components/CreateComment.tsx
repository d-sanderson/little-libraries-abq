/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import { z } from "zod";
import Comments from "./Comments";
import { GET_COMMENTS_AND_USER_EMAIL } from "../queries";

const commentSchema = z.object({
  library_id: z.string(),
  comment_text: z.string(),
  user_id: z.string(),
})

export const CreateComment = async ({ context }) => {
  const formData = await context.req.parseBody()
  const parsed = commentSchema.safeParse(formData)
  if (parsed.success) {
    const { data: {
      library_id,
      comment_text,
      user_id
    } } = parsed
    await context.env.DB.prepare("INSERT INTO LibraryComments (library_id, comment_text, user_id) VALUES (?, ?, ?) RETURNING *")
      .bind(library_id, comment_text, user_id).first();

    const { results: comments } = await context.env.DB.prepare(GET_COMMENTS_AND_USER_EMAIL)
      .bind(library_id)
      .all();

      console.log({comments})
    return <Comments comments={comments} />
  } else {
    console.log('errors', parsed.error.flatten().fieldErrors)
    return <div>{parsed.error.flatten().fieldErrors}</div>
  }
}
