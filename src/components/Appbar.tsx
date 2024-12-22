"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Appbar() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <h1>Appbar</h1>
      <button onClick={() => signIn()}>signin</button>
      <button onClick={() => signOut()}>logout</button>
      {JSON.stringify(session)}
    </div>
  );
}
