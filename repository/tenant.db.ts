import { Injectable } from "https://deno.land/x/alosaur@v0.21.2/mod.ts";
import { MongoClient, Database } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

@Injectable()
export class TenantDB {
  private db: Database;

  constructor() {
    const client = new MongoClient();
    client.connectWithUri("mongodb://localhost:27017");
    this.db = client.database("rentapp");
  }

  public getDb() {
    return this.db;
  }
}
