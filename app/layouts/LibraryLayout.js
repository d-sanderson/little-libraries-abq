/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import LibraryDetails from "../components/LibraryDetails";
// import { TodoListForlibrary, NewTodoForm } from "../routes/todos";

const LibraryLayout = async ({ context, children }) => {
  const { libraryId } = context.req.param();
  const library = await context.env.DB.prepare(
    "SELECT * FROM LittleLibraries WHERE id = ?"
  )
    .bind(libraryId)
    .first();

  return (
    <div>
      <LibraryDetails library={library} />
      <div id="ViewLibraryChildren" class="w-1/2">
        {children}
      </div>
    </div>
  );
};

export default LibraryLayout;
