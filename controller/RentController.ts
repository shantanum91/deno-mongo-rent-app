import {
  Controller,
  Inject,
  Get,
  Param,
} from "https://deno.land/x/alosaur/src/mod.ts";
import { RentService } from "../service/rent.service.ts";
import { NoTenantError } from "../error/no.tenant.error.ts";

@Controller("/rent")
export class RentController {
  private rentService: RentService;

  constructor(@Inject(RentService) rentService: RentService) {
    this.rentService = rentService;
  }

  @Get("/:month/:name")
  public async getRent(
    @Param("month") month: number,
    @Param("name") name: string,
  ) {
    try {
      const rent = await this.rentService.getRent(
        parseInt(month + ""),
        name ?? "",
      );
      return { rent };
    } catch (e) {
      console.error(e);
      if (e instanceof NoTenantError) {
        return { "error": "No Tenant found!" };
      }
      throw e;
    }
  }
}
