import { Injectable } from "https://deno.land/x/alosaur/src/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { NoTenantError } from "../error/no.tenant.error.ts";

@Injectable()
export class RentService {
  public async getRent(month: number, name: string) {
    const client = new MongoClient();

    client.connectWithUri("mongodb://localhost:27017");

    const db = client.database("rentapp");
    const tenantColl = db.collection("tenant");

    const myRent = await tenantColl.findOne({ name });
    console.log(myRent);
    if (myRent == null) {
      throw new NoTenantError("Tenant not found");
    }
    return (month - 1) * 1000 + parseInt(myRent.rent);
  }
}
