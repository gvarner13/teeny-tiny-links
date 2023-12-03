import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Welcome to my worker!"));

export default app;
