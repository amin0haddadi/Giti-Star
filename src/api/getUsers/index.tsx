import { PATHNAME } from "@/constants";
import { User } from "@/types";

export async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${PATHNAME}/users`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch users");

    return res.json();
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to fetch users");
  }
}
