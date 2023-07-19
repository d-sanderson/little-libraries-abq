/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from 'hono/jsx'

import { Link, Form } from '../../htmy'

export const ListTodos = ({ project }) => (
  <ul class="menu bg-base-100">
    {project.todos.map((todo) => (
      <li id={`todo-${todo.id}`}>
        <Link class="text-blue-500" to={`/projects/${project.id}/todos/${todo.id}`} hx-target="#ViewProjectChildren">{todo.name}</Link>
      </li>
    ))}
  </ul>
)

export const ViewTodo = ({ projectId, todo }) => (
  <div class="flex gap-2">
    <h2 class="text-xl">{todo.name}</h2>
    <button class="btn btn-sm" hx-get={`/projects/${projectId}/todos/${todo.id}/edit`} hx-target="#ViewProjectChildren">Edit</button>
    <button class="btn btn-sm" hx-delete={`/projects/${projectId}/todos/${todo.id}`} hx-target="body">Delete</button>
  </div>
)

export const NewTodo = ({ projectId }) => (
  // Like Link, there is an optional hx-target param which if included will replace the contents of the target element with the response. If omitted, the response will replace the entire body (still using ajax to make it performant). When updating data you will often want to omit hx-target so that everything on the page is updated with the new values.
  <Form action={`/projects/${projectId}/todos/new`} method="post">
    <div class="flex gap-2">
      <input type="text" name="name" class="input input-bordered w-full max-w-xs input-sm" placeholder="Todo name..." />
      <button class="btn btn-sm btn-primary" type="submit">Create</button>
    </div>
  </Form>
)

export const EditTodo = ({ projectId, todo }) => (
  // Like Link, there is an optional hx-target param which if included will replace the contents of the target element with the response. If omitted, the response will replace the entire body (still using ajax to make it performant). When updating data you will often want to omit hx-target so that everything on the page is updated with the new values.
  <Form action={`/projects/${projectId}/todos/${todo.id}`} method="put">
    <div class="flex gap-2">
      <input type="text" name="name" class="input input-bordered w-full max-w-xs input-sm" value={todo.name} />
      <button class="btn btn-sm btn-primary" type="submit">Save</button>
    </div>
  </Form>
)
