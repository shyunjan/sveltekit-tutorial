<div class="card">
  <header>
    <slot name="telephone">
      <i>(telephone)</i>
    </slot>
    <slot name="company">
      <i>(company name)</i>
    </slot>
  </header>

  <slot>
    <i>(name)</i>
  </slot>

  <footer>
    <slot name="address">
      <i>(address)</i>
    </slot>
  </footer>
</div>

<style>
  @font-face {
    src: url('/fonts/Garamond Classico SC Regular.woff2') format('woff2');
    font-family: 'Silian Rail';
    font-style: normal;
    font-weight: 400;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: min(2vw, 3.5vh, 1.5rem);
    font-family: 'Silian Rail';
    width: 24em;
    aspect-ratio: 3.5 / 2;
    background: url(./paper.svg) no-repeat 50% 50%;
    background-size: cover;
    border-radius: 2px;
    filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2));
    padding: 1.5em 1em 1em 1em;
    font-variant: small-caps;
    text-shadow:
      -1px -1px 2px rgba(0, 0, 0, 0.2),
      1px 1px 2px white;
    color: hsl(50, 20%, 35%);
    line-height: 1.2;
  }

  /* 
  원래는 slot에 들어가는 contents(내용)의 스타일은 해당 contents를 넣어주는 component에서 지정해야 하지만 아래처럼 :global() 지시자를 사용해서 만들 수 있다.
  그러나, 원칙이 아니므로 가급적이면 사용하지 않아야 한다.
  .card :global(small) {
    display: block;
    font-size: 0.6em;
    text-align: right;
  } */

  header,
  footer {
    width: 100%;
    display: flex;
    flex: 1;
  }

  header {
    justify-content: space-between;
  }

  footer {
    font-size: 0.7em;
    justify-content: center;
    align-items: end;
  }
</style>
