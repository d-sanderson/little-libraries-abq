/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";

const AdminLayout = async ({ context }) => {
  const { results: users } = await context.env.DB.prepare(
    "SELECT * FROM Users"
  ).all()

  const { results: pendingEntries } = await context.env.DB.prepare(
    "SELECT * FROM LittleLibraries WHERE approved_status = 0"
  ).all()
  
  const { results: comments } = await context.env.DB.prepare(
    "SELECT * FROM LibraryComments"
  ).all()

  return (
    <div>
      <details>
        <summary>
          Pending Entries
        </summary>
          <pre>
            {JSON.stringify(pendingEntries, null, 2)}
          </pre>
      </details>

      <details>
        <summary>
          Users
        </summary>
          <pre>
            {JSON.stringify(users, null, 2)}
          </pre>
      </details>

      <details>
        <summary>
          Comments
        </summary>
          <pre>
            {JSON.stringify(comments, null, 2)}
          </pre>
      </details>
    </div>
  );
};

export default AdminLayout;
