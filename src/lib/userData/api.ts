import { get } from "@/service/requestService";

// export const fetchUserData = async () =>
//   await get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/watashi`, {
//     credentials,
//   });

export const fetchUserData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/watashi`,
    {
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
};
