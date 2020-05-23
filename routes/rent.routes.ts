import { RentService } from "./../service/rent.service.ts";
import { NoTenantError } from "../error/no.tenant.error.ts";
import { Injectable, Inject } from "https://deno.land/x/alosaur/src/mod.ts";

@Injectable()
export class RentRoutes {
  private rentService: RentService;

  constructor(@Inject(RentService) rentService: RentService) {
    this.rentService = rentService;
  }

  public getRent = async (context: any) => {
    try {
      const rent = await this.rentService.getRent(
        parseInt(context.params.month + ""),
        context.params.name ?? "",
      );
      context.response.body = { rent };
    } catch (e) {
      console.error(e);
      if (e instanceof NoTenantError) {
        context.response.body = { "error": "No Tenant found!" };
      } else {
        throw e;
      }
    }
  };
}
