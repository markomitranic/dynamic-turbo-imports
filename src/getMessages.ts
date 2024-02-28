export default async function getMessages(lang: "en" | "da") {
  return (await import(`../messages/${lang}.json`)).default;
}
