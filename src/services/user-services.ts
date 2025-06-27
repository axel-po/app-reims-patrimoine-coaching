"use server";

import {
  getUserById,
  searchUsers,
  getAllUsers,
} from "@/data/repositories/user-repository";

export async function searchUsersService(searchTerm: string) {
  return searchUsers(searchTerm);
}

export async function getUserWithHabits(userId: string) {
  const user = await getUserById(userId);

  if (!user) {
    return null;
  }

  return {
    user,
  };
}

export async function getRecentUsers(limit: number = 10) {
  return getAllUsers(limit);
}
