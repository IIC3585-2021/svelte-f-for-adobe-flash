<script>
	import { onMount } from 'svelte';
	import { games, fetchGames } from './store.js'
	export let name;

	onMount(fetchGames)
</script>

<main>
	<h1>Hello {name}!</h1>
	<div>
		{#each $games as game}
			<h3> {game.title}</h3>
		{/each}
	</div>
</main>
