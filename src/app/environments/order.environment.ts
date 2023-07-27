import { environment } from "./environment";

export const orderEnvironment = {
    production: false,
    api: `${environment.domain}:${process.env["ORDER_PORT"]}`||`${environment.domain}:ABBAS`
  };

  // 8084