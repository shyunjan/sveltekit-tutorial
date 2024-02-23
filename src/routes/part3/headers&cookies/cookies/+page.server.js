export function load({ cookies }) {
  const visited = cookies.get('visited');

  cookies.set('visited', 'true', { path: '/part3/headers&cookies' });

  return {
    visited: visited === 'true'
  };
}