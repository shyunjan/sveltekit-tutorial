export async function load({ fetch }) {
  const response = await fetch('/part4/hooks/handle-fetch/api');

  return {
    message: await response.text()
  };
}