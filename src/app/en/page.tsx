import getMessages from "@/getMessages";

export default async function Page() {
  const messages = await getMessages("en");
  return <>{JSON.stringify(messages)}</>;
}
