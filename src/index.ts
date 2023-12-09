import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

app.notFound((c) => {
  return c.text("Your looking in the wrong spot", 404);
});

app.get("/", (c) => c.text("Welcome to my worker!"));

app.get("/redirect", (c) => {
  return c.redirect("https://github.com/gvarner13");
});

app.post(
  "/links",
  zValidator(
    "json",
    z.object({
      url: z.string().url(),
    })
  ),
  (c) => {
    const { url } = c.req.valid("json");
    return c.jsonT({
      message: `${url} has been verified`,
    });
  }
);

export default app;
