export async function load({ fetch }) {
  const response = await fetch('/part4/advanced-loading/invalidation/api/now');
  const now = await response.json();
  // console.debug(`now = ${now}`);

  return {
    now
  };
}
