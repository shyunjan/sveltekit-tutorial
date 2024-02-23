<script lang="ts">
  /** Text Inputs */
	let name = 'world';
  /** Numeric inputs */
  let a = 1;
	let b = 2;
  /** Checkbox inputs */
  let yes = false;
  /** Select bindings */
  let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];
	let selected: typeof questions[number];
	let answer = '';
	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
</script>

<!-- Text Inputs -->
<input bind:value={name} />
<h1>Hello {name}!</h1>
<br/>
<br/>
<br/>
<!-- Numeric inputs -->
<label>
  <input type="number" bind:value={a} min="0" max="10" />
	<input type="range" bind:value={a} min="0" max="10" />
</label><br/>
<label>
  <input type="number" bind:value={b} min="0" max="10" />
	<input type="range" bind:value={b} min="0" max="10" />
</label>
<p>{a} + {b} = {a + b}</p>
<br/>
<br/>
<br/>
<!-- Checkbox inputs -->
<label>
  <input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>
{#if yes}
<p>
  Thank you. We will bombard your inbox and sell
  your personal details.
</p>
{:else}
<p>
  You must opt in to continue. If you're not
  paying, you're the product.
</p>
{/if}
<button disabled={!yes}>Subscribe</button>
<br/>
<br/>
<br/>
<!-- Select bindings -->
<h2>Insecurity questions</h2>
<form on:submit|preventDefault={handleSubmit}>
	<select
		bind:value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>
  <!-- 
    NOTE
    Because we haven't set an initial value of selected, the binding will set it to the default 
    value (the first in the list) automatically. Be careful though — until the binding is initialised, 
    selected remains undefined, so we can't blindly reference e.g. selected.id in the template.
  -->
  
	<input bind:value={answer} />
	<button disabled={!answer} type="submit">
		Submit
	</button>
</form>
<p>
	selected question {selected
		? selected.id
		: '[waiting...]'}
</p>