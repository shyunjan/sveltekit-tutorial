export async function load({ fetch }) {
  const response = await fetch('/part4/hooks/handleFetch/api');

  return {
    message: await response.text()
  };
}