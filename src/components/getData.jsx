async function getData() {
  const res = await fetch(`${process.env.URL}/api/blogs`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("fetch failed");
  }
  return res.json();
}
export default getData;
