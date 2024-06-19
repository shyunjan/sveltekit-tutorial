<script>
  let user = {
    firstname: 'Ada',
    lastname: 'Lovelace'
  };

  import Tutorial from './Tutorial.md';
</script>

<label>
  <input bind:value={user.firstname} />
  first name
</label>

<label>
  <input bind:value={user.lastname} />
  last name
</label>

{(console.log(user), '')}

{@debug user}

<h1>Hello {user.firstname}!</h1>

<div class="tutorial">
  <Tutorial />
</div>
