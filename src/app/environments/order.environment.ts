import { environment } from "./environment";

export const orderEnvironment = {
    production: false,
    api: `${environment.domain}:8084`
  };