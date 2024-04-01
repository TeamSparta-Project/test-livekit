export type user = {
  room: string;
  name: string;
};

// export async function deleteToken() {}

export async function getToken({ room, name }: user): Promise<string> {
  const resp = await fetch(`/api/get-participant-token?room=${room}&username=${name}`);
  const data = await resp.json();
  return data.token;
}
