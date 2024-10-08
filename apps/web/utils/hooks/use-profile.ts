import { User } from "db";
import { trpc } from "@/utils/trpc";
import { Serialize } from "shared/types";

export type Result =
  | {
      status: "authenticated";
      profile: Serialize<User>;
    }
  | {
      status: "unauthenticated" | "loading";
      profile: null;
    };

/**
 * Get user profile, as an alternative to next-auth's `useSession`
 *
 * If no requirements on realtime mutates, please use `useSession` instead
 */
export function useProfile(): Result {
  const query = trpc.account.get.useQuery(undefined, {
    staleTime: Infinity,
  });

  if (query.isLoading) {
    return {
      status: "loading",
      profile: null,
    };
  }

  if (query.isError) {
    return {
      status: "unauthenticated",
      profile: null,
    };
  }

  return {
    status: "authenticated",
    profile: query.data,
  };
}
