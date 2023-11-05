/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";

export const NewComment = ({ libraryId }) => (
  // We use hx-boost because we want the whole page to update
  <form
    id="comments"
    hx-post="/comments"
    hx-push-url="false"
    hx-target="#comments"
  >
    <div class="flex gap-2 mt-4 pt-6 border-t border-gray-100  ">
      <input
        type="text"
        name="comment_text"
        placeholder="Write a comment..."
        autofocus
        class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <input
        name="library_id"
        value={libraryId}
        type="hidden"
      />
      <input
        name="user_id"
        // todo dynamically add user_id
        value="1"
        type="hidden"
      />
      <button class="btn" type="submit">
       Add a comment
      </button>
    </div>
  </form>
);
