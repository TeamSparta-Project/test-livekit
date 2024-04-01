"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RoomPage = () => {
  // TODO: get user input for room and name
  const [room, setRoom] = useState<string>("");
  const [name, setName] = useState<string>("");

  const router = useRouter();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/room/${room}?room=${room}&name=${name}`);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col justify-center item-center min-h-screen">
      <input type="text" placeholder="Room" value={room} className="mb-4" onChange={(e) => setRoom(e.target.value)} />
      <input type="text" placeholder="Name" value={name} className="mb-4" onChange={(e) => setName(e.target.value)} />
      <button type="submit">Join</button>
    </form>
  );
};
export default RoomPage;
