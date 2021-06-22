<script>
	export let name;
	let games;
	const options = {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "24b838a613msh0a610b53a6fb83ep1fe6b6jsn2fda2eb88375",
			"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
			"useQueryString": true
		}
    }
	const fetchGames = (async () => {
		const req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
		const aux = await req.json()
		console.log(aux)
		return aux
	})()


	
</script>

{#await fetchGames}
<p>LOADING...</p>
{:then data}
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
{:catch error}
<p>An error occurred!</p>
{/await}

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