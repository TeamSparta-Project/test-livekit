"use client";

import { getToken } from "@/utils/hooks/useQuery";
import { ControlBar, GridLayout, LiveKitRoom, ParticipantTile, useTracks } from "@livekit/components-react";
import "@livekit/components-styles";
import { useQuery } from "@tanstack/react-query";
import { Track } from "livekit-client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();
  const routers = useRouter();

  const room = params.get("room");
  const name = params.get("name");

  if (!room || !name) {
    return;
  }

  const {
    data: token,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`room${name}`],
    queryFn: () => getToken({ room, name }),
  });

  if (isLoading) {
    console.log("로딩중");
  }

  if (isError) {
    console.log(isError);
  }

  // 현재 토큰을 별도로 저장하고 있지 않기에 제거할 수 없으므로 임시로 route 변경
  const deleteToken = () => {
    routers.replace(`/room`);
  };

  return (
    <LiveKitRoom
      token={token} // 필수 요소
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL} // 필수 요소
      video={true}
      audio={true}
      onDisconnected={deleteToken} //연결 중단 시 발생하는 이벤트 핸들러
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: "100dvh" }}
    >
      {/* <VideoConference /> */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      {/* <RoomAudioRenderer /> */}
      {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );

  return (
    <GridLayout tracks={tracks} style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
