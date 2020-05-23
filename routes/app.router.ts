import { RentRoutes } from './rent.routes.ts';
import { Router } from "https://deno.land/x/oak/mod.ts";
import { Injectable, Inject } from "https://deno.land/x/alosaur/src/mod.ts";

@Injectable()
export class AppRouter {
  public router: Router;

  constructor(@Inject(RentRoutes) rentRoutes: RentRoutes) {
    const router = new Router();

    router
      .get("/rent/:month/:name", rentRoutes.getRent);
    this.router = router;
  }
}
