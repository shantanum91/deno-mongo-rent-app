import { Application } from "https://deno.land/x/oak/mod.ts";
import { AppRouter } from "./routes/app.router.ts";
import { container } from "https://deno.land/x/alosaur/src/mod.ts";

const PORT = 8080;
const app = new Application();

const appRouter = container.resolve(AppRouter);
app.use(appRouter.router.routes());

console.log("Listening on port:" + PORT);
await app.listen("localhost:" + PORT);
