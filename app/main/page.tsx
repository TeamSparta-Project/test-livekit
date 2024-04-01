"use client";

import Link from "next/link";

export const MainPage = () => {
  return (
    <Link href={`/room`}>
      <button>마피아 게임하러 가기</button>
    </Link>
  );
};
