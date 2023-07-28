import { environment } from "./environment";

export const prodEnvironment = {
    production: false,
    api: `${environment.domain}:${process.env["PRODUCT_PORT"]}` ||`${environment.domain}:8083`
  };

  // 8083