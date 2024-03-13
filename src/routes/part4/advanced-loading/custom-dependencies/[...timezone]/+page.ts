export function load({ params }) {
  console.debug(`params.timezone = ${params.timezone}`);
  return {
    timezone: params.timezone
  }
}