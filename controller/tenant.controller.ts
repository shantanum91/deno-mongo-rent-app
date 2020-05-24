import { Tenant } from "./../model/tenant.ts";
import {
  Controller,
  Inject,
  Post,
  Body,
} from "https://deno.land/x/alosaur/src/mod.ts";
import { RentService } from "../service/rent.service.ts";

@Controller("/tenant")
export class TenantController {
  private rentService: RentService;

  constructor(@Inject(RentService) rentService: RentService) {
    this.rentService = rentService;
  }

  @Post("")
  public async creteTenant(
    @Body() tenant: Tenant,
  ) {
    console.log("here");
    await this.rentService.createTenant(tenant);
  }
}
