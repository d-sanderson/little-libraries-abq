/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import { GET_ALL_USERS, GET_COMMENTS, GET_PENDING_COMMENTS } from "../queries";

const AdminLayout = async ({ context }) => {
  const { results: users } = await context.env.DB.prepare(GET_ALL_USERS).all()
  const { results: pendingEntries } = await context.env.DB.prepare(GET_PENDING_COMMENTS).all()
  const { results: comments } = await context.env.DB.prepare(GET_COMMENTS).all()

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
