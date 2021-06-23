<script>
	import { onMount } from 'svelte';
	import SearchBar from "./components/SearchBar.svelte";
	import { fetchGames } from './store.js'
	import BigDiv from "./components/BigDiv.svelte"
	import NavBar from "./components/NavBar.svelte"

	onMount(fetchGames)
</script>

<main>
	<div class="navbar">
		<NavBar />
	</div>
	<h1>Encuentra tu juego gratis ideal! </h1>
	<SearchBar />
	<h5 class="black"> </h5>

	<BigDiv/>
</main>

<style>
	main {
		text-align: center;
		margin: 0%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	.navbar {
		background-color: #1b2735;
		height: 50px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
