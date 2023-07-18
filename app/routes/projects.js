import { Hono } from 'hono'
import { ListProjects, ViewProject } from '../views/project'
import { ViewTodo, EditTodo } from '../views/todo'
import MainLayout from '../layouts/main'
import AppLayout from '../layouts/app'
import { layout } from '../../htmy'
// import todoRoute from './todos'
import { html } from 'hono/html'
/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from 'hono/jsx'

let PROJECTS = [
  {
    id: 0, text: 'Shopping List', todos: [
      { id: 0, text: 'Buy milk' },
      { id: 1, text: 'Buy eggs' },
      { id: 2, text: 'Buy bread' },
    ]
  },
  {
    id: 1, text: 'Errands', todos: [
      { id: 0, text: 'Pick up dry cleaning' },
      { id: 1, text: 'Get car washed' },
      { id: 2, text: 'Pick up groceries' },
    ]
  },
]

// Route layouts get passed the same props as the route's view
// TODO find a way to pull out the view's props and pass them here too
const ProjectsLayout = (props) => html`
<div class="p-6">
  <h1 class="text-2xl">Projects Layout</h1>
  ${props.children}
</div>
`

const projectsRoute = new Hono()

// TODO run the actual route code when rendering each layout, and then put all the returned values into an object we pass along, like Remix does with routes. This way we don't have to make sure each route loads all the data that all the layouts it uses needs
projectsRoute.use('/*', layout(MainLayout))
projectsRoute.get('/', (c) => {
  const projects = PROJECTS
  // return c.text`get / Projects Route`
  return c.html(ListProjects({ projects }))
})
// Example of a route that also functions as a layout
projectsRoute.get('/:projectId/*', layout(({ context: c, children }) => {
  const { projectId } = c.req.param()
  const project = PROJECTS[projectId]

  return ViewProject({ project, children })
}))
projectsRoute.get('/:projectId/todos/:todoId', (c) => {
  const { projectId, todoId } = c.req.param()
  const project = PROJECTS[projectId]
  const todo = project.todos[todoId]
  return c.html(ViewTodo({
    project,
    todo,
  }))
})
projectsRoute.get('/:projectId/todos/:todoId/edit', (c) => {
  const { projectId, todoId } = c.req.param()
  const project = PROJECTS[projectId]
  const todo = project.todos[todoId]
  return layout(c, [EditTodo, ViewProject, ProjectsLayout, MainLayout], {
    title: `Edit ${todo.text}`,
    project,
    todo,
  })
})
projectsRoute.put('/:projectId/todos/:todoId', async (c) => {
  const { projectId, todoId } = c.req.param()
  // Here we would update the todo in the db
  const data = await c.req.parseBody()
  PROJECTS[projectId].todos[todoId].text = data.text

  const project = PROJECTS[projectId]
  const todo = project.todos[todoId]
  // TODO we must revalidate ViewProject to refesh the list of todos
  return layout(c, [ViewTodo, ViewProject, ProjectsLayout, MainLayout], {
    title: `Edit ${todo.text}`,
    project,
    todo,
  })
})

export default projectsRoute
