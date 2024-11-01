import React from "react";
import UserList from "./_components/UserList";
import { fetchGithubUsers } from "./lib/getData";

export default async function Home() {
  const data = await fetchGithubUsers(10);

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div className="font-bold text-2xl items-center flex">User List</div>
      <>
        <UserList data={data} />
      </>
    </main>
  );
}
