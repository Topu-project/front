"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { userAtom } from "../atoms/userAtom";
import { fetchUserData } from "@/lib/userData/api";
import { useQuery } from "@tanstack/react-query";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useAtom(userAtom);

  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: fetchUserData,
    retry: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    } else if (user === null) {
    }
  }, [userData, setUser]);

  return <>{children}</>;
}
