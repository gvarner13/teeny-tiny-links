import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

app.notFound((c) => {
  return c.text("Your looking in the wrong spot", 404);
});

app
  .get("/links", (c) => {
    return c.text("This will return links");
  })
  .post(
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

app.get("/:id", (c) => {
  const id = c.req.param("id");
  let url = "";
  switch (id) {
    case "github":
      url = "https://github.com/gvarner13";
      break;
    case "mylinks":
      url = "https://www.garyvarner.me/notlinktree";
      break;
    default:
      return c.text("Your looking in the wrong spot", 404);
  }
  return c.redirect(url);
});

export default app;
