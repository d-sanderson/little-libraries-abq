/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import LibraryDetails from "../components/LibraryDetails";
import Comments from "../components/Comments";
import { NewComment } from "../components/NewComment";
import { GET_COMMENTS_AND_USER_EMAIL, GET_LIBRARY_BY_ID } from "../queries";

const LibraryLayout = async ({ context, children }) => {
  const { libraryId } = context.req.param();
  const library = await context.env.DB.prepare(GET_LIBRARY_BY_ID)
    .bind(libraryId)
    .first();


  const { results: comments } = await context.env.DB.prepare(GET_COMMENTS_AND_USER_EMAIL)
    .bind(libraryId)
    .all();

  return (
    <div>
      <LibraryDetails library={library} />
      <div id="ViewLibraryChildren" class="w-1/2">
        {children}
      </div>
      <Comments comments={comments} />
      <NewComment libraryId={libraryId} />
    </div>
  );
};

export default LibraryLayout;
