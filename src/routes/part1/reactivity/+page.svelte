<script>
  let count = 0;
  let test = 'a';
  $: doubled = count * 2;

  function increment() {
    ++count;
  }

  $: {
    console.log(`the count is ${count}`);
    console.log(`this will also be logged whenever count changes`);
  }
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 0;
  }

  let numbers = [1, 2, 3, 4];

  function addNumber() {
    // numbers.push(numbers.length); // 할당문(assignment)이 아니므로 reactivity가 일어나지 않는다.
    // numbers = numbers; // 할당문(assignment)이므로 reactivity가 일어난다.
    numbers[numbers.length] = numbers.length + 1; // 할당문(assignment)이므로 reactivity가 일어난다.
  }

  $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

  import Tutorial from './Tutorial.md';
</script>

<button on:click={increment}>
  Clicked {count}
  {count <= 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>

<button on:click={addNumber}> Add a number </button>
<p>{numbers.join(' + ')} = {sum}</p>

<div class="tutorial">
  <Tutorial />
</div>
