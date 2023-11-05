/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";

const Comments = ({ comments }) => {
  return (
    <section id="comments" class="space-y-16">
      {comments.map(comment => (
        <div>
          <pre>
            comment_text: {comment.comment_text}
          <pre>
            username: {comment.email}
          </pre>
          </pre>
          <pre>
            library_id: {comment.library_id}
          </pre>
        </div>
      ))}
    </section>
  )
}

export default Comments
