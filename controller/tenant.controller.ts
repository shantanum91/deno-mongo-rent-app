import { Tenant } from "./../model/tenant.ts";
import {
  Controller,
  Inject,
  Post,
  Body,
} from "https://deno.land/x/alosaur@v0.21.2/mod.ts";
import { RentService } from "../service/rent.service.ts";

@Controller("/tenant")
export class TenantController {
  private rentService: RentService;

  constructor(@Inject(RentService) rentService: RentService) {
    this.rentService = rentService;
  }

  // Request format : {"name":"myname", "rent":10000}
  // Send Content-Type: application-json
  @Post("")
  public async creteTenant(@Body() tenant: Tenant) {
    try {
      console.log("here", tenant);
      await this.rentService.createTenant(tenant);
      return "Success";
    } catch (e) {
      console.error(e);
      return "Failure";
    }
  }
}
