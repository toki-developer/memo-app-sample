declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
  }
}
