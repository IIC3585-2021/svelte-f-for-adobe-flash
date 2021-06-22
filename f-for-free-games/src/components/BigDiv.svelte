<script>
	import { onMount } from 'svelte';
	import { games, fetchGames } from './store.js'
	import GameDiv from "./components/GameDiv.svelte"

	onMount(fetchGames)
</script>
<main>
	{#each $games as game}
		<GameDiv game= {game}/>
	{/each}
</main>

<style>
</style>
