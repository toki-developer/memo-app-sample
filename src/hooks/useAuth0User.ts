import { useAuth0 } from "@auth0/auth0-react";

export const useAuth0User = () => {
  const auth0 = useAuth0();
  return {
    ...auth0,
    userId: auth0.user?.[`${process.env.NEXT_PUBLIC_APP_URL}/userId`],
  };
};
