export const BASE_URL: string = import.meta.env.VITE_ENV === "dev" ?  import.meta.env.VITE_BASE_URL_DEV : import.meta.env.VITE_BASE_URL_PROD;
