export function load({ setHeaders }) {
  setHeaders({
    'Content-Type': 'text/plain; charset=utf-8'
  }); // 새로 고침(캐시 무시하기)을 해야 'text/plain' 상태로 보인다
}