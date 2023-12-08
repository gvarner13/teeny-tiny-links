import { Hono } from "hono";

const app = new Hono();

app.notFound((c) => {
  return c.text("Your looking in the wrong spot", 404);
});

app.get("/", (c) => c.text("Welcome to my worker!"));

app.get("/redirect", (c) => {
  return c.redirect("https://github.com/gvarner13");
});

export default app;
