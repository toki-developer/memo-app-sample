import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth0User } from "./useAuth0User";

export const useRequireLogin = () => {
  const { isAuthenticated, isLoading } = useAuth0User();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/memo");
    }
  }, [isAuthenticated, isLoading, router]);
};
