import getMessages from "@/getMessages";

export default async function Page() {
  const messages = await getMessages("da");
  return <>{JSON.stringify(messages)}</>;
}
