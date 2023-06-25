import { environment } from "./environment";

export const prodEnvironment = {
    production: false,
    api: `${environment.domain}:8083`
  };