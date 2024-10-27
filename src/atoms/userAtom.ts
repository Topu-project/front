// atoms/userAtom.ts
import { atom } from "jotai";
import { UserData } from "@/lib/userData/types";

// 기본 user atom
export const userAtom = atom<UserData | null>(null);

// 인증 상태 확인을 위한 derived atom
export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);
