import { Tenant } from "./../model/tenant.ts";
import { Injectable, Inject } from "https://deno.land/x/alosaur/src/mod.ts";
import { NoTenantError } from "../error/no.tenant.error.ts";
import {  TenantDB } from "../repository/tenant.db.ts";
import { Database } from "https://deno.land/x/mongo@v0.7.0/ts/database.ts";
@Injectable()
export class RentService {

  private tenantDB: TenantDB;

  constructor(@Inject(TenantDB) tenantDB: TenantDB) {this.tenantDB = tenantDB;}

  public async getRent(month: number, name: string) {
    const db: Database = this.tenantDB.getDb();
    const tenantColl = db.collection("tenant");

    const tenant: Tenant = await tenantColl.findOne({ name });
    console.log(tenant);
    if (tenant == null) {
      throw new NoTenantError("Tenant not found");
    }
    return (month - 1) * 1000 + tenant.rent;
  }

  public async createTenant(tenant: Tenant) {
    const db: Database = this.tenantDB.getDb();
    const tenantColl = db.collection("tenant");

    await tenantColl.insertOne( tenant );
  }
}
