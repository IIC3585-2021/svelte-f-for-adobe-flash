<script>
	import { onMount } from 'svelte';
	import SearchBar from "./components/SearchBar.svelte";
	import { fetchGames } from './store.js'
	import BigDiv from "./components/BigDiv.svelte"

	onMount(fetchGames)
</script>

<main>
	<SearchBar />
	<h1>Encuentra tu juego gratis ideal! </h1>
	<h5 class="black"> </h5>

	<BigDiv/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
