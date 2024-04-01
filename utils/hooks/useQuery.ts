export type user = {
  room: string;
  name: string;
};

export async function getToken({ room, name }: user): Promise<string> {
  //해당 room 이름 및 user name 전달
  const resp = await fetch(`/api/get-participant-token?room=${room}&username=${name}`);
  const data = await resp.json();
  return data.token;
}
