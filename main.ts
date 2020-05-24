import { App } from "https://deno.land/x/alosaur/src/mod.ts";
import { HomeArea } from "./area/home.area.ts";

const PORT = 8080;

const app = new App({
  areas: [HomeArea],
});

console.log("Listening on port:" + PORT);
await app.listen("localhost:" + PORT);
