/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import { Hono } from "hono";
import { rootLayout, layout, view } from "../htmljs";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import LibraryLayout from "./layouts/LibraryLayout";
import {
  CreateLibrary,
} from "./routes/todos";
import LibraryListLayout from "./layouts/LibraryList";
import AdminLayout from "./layouts/AdminLayout";
import LoginLayout from "./layouts/LoginLayout";
import { CreateComment } from "./components/CreateComment";

const app = new Hono();

app.use("*", rootLayout(AppLayout));
app.use("*", layout(MainLayout));
app.get("/admin", view(AdminLayout));
app.use("/libraries/:libraryId/*", layout(LibraryLayout)); // Example of a nested layout
app.get("/", view(LibraryListLayout));
app.get(
  "/libraries/:libraryId/view",
  view(() => <div>side panel add comments add report/request edit</div>)
); // library layout is where the library is actually rendered. Here we just return the right sidebar content where we show the selected todo, which is blank when first viewing a library
app.post("/library/new", view(CreateLibrary));
app.get("/login", view(LoginLayout));
app.get("/signup", view(LoginLayout));

app.post(
  "/comments",
  view(CreateComment)
);
// app.get("/libraries/:libraryId/todos/:todoId", view(GetTodo));
// app.put("/libraries/:libraryId/todos/:todoId", view(UpdateTodo));
// app.put("/libraries/:libraryId/todos/:todoId/state", view(UpdateTodoState));
// app.delete("/libraries/:libraryId/todos/:todoId", view(DeleteTodo));
// app.get("/libraries/:libraryId/todos/:todoId/edit", view(EditTodo));

export default app;
