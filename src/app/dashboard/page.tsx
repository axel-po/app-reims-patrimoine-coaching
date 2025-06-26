import { getUser } from "@/lib/auth-server";
import { unauthorized } from "next/navigation";
import React from "react";

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    return unauthorized();
  }

  return <div>page</div>;
}
