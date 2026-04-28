import { env } from "@/lib/env";

export const googleProvider = {
  clientId: env.GOOGLE_CLIENT_ID as string,
  clientSecret: env.GOOGLE_CLIENT_SECRET as string,
};
