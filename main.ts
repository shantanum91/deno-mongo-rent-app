import { RentController } from "./controller/RentController.ts";
import {
  Area,
  App,
} from "https://deno.land/x/alosaur/src/mod.ts";

const PORT = 8080;

@Area({
  controllers: [RentController],
})
export class HomeArea {}

const app = new App({
  areas: [HomeArea],
});

console.log("Listening on port:" + PORT);
await app.listen("localhost:" + PORT);
