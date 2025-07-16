import { useSession } from "@/lib/auth-client";

export const useAuth = () => {
  const { data: session, isPending } = useSession();
  
  return {
    user: session?.user,
    isAuthenticated: !!session?.user,
    isLoading: isPending,
    session,
  };
};