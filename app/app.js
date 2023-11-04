/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import { Hono } from "hono";
import { rootLayout, layout, view } from "../htmljs";
import AppLayout from "./layouts/app";
import MainLayout from "./layouts/main";
import LibraryLayout from "./layouts/library";
import {
  CreateLibrary,
  DeleteTodo,
  EditTodo,
  GetTodo,
  UpdateTodo,
  UpdateTodoState,
} from "./routes/todos";

const app = new Hono();

app.use("*", rootLayout(AppLayout));
app.use("*", layout(MainLayout));
app.use("/libraries/:libraryId/*", layout(LibraryLayout)); // Example of a nested layout
app.get(
  "/libraries/:libraryId/view",
  view(() => <div></div>)
); // library layout is where the library is actually rendered. Here we just return the right sidebar content where we show the selected todo, which is blank when first viewing a library
app.post("/admin/library/new", view(CreateLibrary));
app.get("/libraries/:libraryId/todos/:todoId", view(GetTodo));
app.put("/libraries/:libraryId/todos/:todoId", view(UpdateTodo));
app.put("/libraries/:libraryId/todos/:todoId/state", view(UpdateTodoState));
app.delete("/libraries/:libraryId/todos/:todoId", view(DeleteTodo));
app.get("/libraries/:libraryId/todos/:todoId/edit", view(EditTodo));

export default app;
