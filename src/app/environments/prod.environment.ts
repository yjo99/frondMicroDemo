import { environment } from "./environment";

export const prodEnvironment = {
    production: false,
    api: `${environment.domain}:${process.env["PRODUCT_PORT"]}` ||`${environment.domain}:ABBAS`
  };

  // 8083