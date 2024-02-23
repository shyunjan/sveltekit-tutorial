export async function getRandomNumber() {
  // Fetch a random number between 0 and 100
  const min = 0, max = 100;

  await sleep(1000);
  // return new Promise(r => setTimeout(r, 1000)).then(() => Math.floor(Math.random() * (max - min) + min));
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Resolve after given ms
 * @param ms
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}