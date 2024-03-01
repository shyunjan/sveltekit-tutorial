// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
      message: string;
      code: string;
    }
		interface Locals {
			answer: number
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
