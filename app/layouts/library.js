/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
// import { TodoListForlibrary, NewTodoForm } from "../routes/todos";

const LibraryLayout = async ({ context, children }) => {
  const { libraryId } = context.req.param();
  const library = await context.env.DB.prepare(
    "SELECT * FROM LittleLibraries WHERE id = ?"
  )
    .bind(libraryId)
    .first();

  return (
    <div class="flex">
      <div class="w-1/2">
        <h2 class="mb-2 text-lg font-semibold ">{library.name}</h2>
        <p>{library.description}</p>
        <pre>{library.latitude}</pre>
        <pre>{library.longitude}</pre>
      </div>
      <div id="ViewLibraryChildren" class="w-1/2">
        {children}
      </div>
    </div>
  );
};

export default LibraryLayout;
