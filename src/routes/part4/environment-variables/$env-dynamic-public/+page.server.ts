import { env } from '$env/dynamic/public';

export function load() {
  return {
    env: {
      PUBLIC_THEME_BACKGROUND: env.PUBLIC_THEME_BACKGROUND,
      PUBLIC_THEME_FOREGROUND: env.PUBLIC_THEME_FOREGROUND
    }
  };
}
