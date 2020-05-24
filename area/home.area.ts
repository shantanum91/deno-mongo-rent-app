import { TenantController } from "./../controller/tenant.controller.ts";
import { Area } from "https://deno.land/x/alosaur/src/mod.ts";
import { RentController } from "../controller/rent.controller.ts";

@Area({
  controllers: [RentController, TenantController],
})
export class HomeArea {}
