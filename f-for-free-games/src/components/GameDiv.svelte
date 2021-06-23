<script>
    export let game;
    export let selected_game_value;
    export let rating_value;
    let fav_games;

    favorite_games.subscribe(value => {
		fav_games = value;
	});

    import { toggleReminder, addFavorite, favorite_games } from '../store.js';
    import Star from "./Star.svelte"
</script>

<div>
    <img
        alt = ""
        class="{selected_game_value === game.id ? 'big-img-game' : 'img-game'}"
        src={game.thumbnail}
        on:click={toggleReminder(game.id)}
    >
    <div class="text">
        <h3
        on:click={toggleReminder(game.id)}
        >
            { game.title}
        </h3>
        {#if selected_game_value === game.id }
        <button class="button" on:click={addFavorite(game.id)}>{fav_games.includes(game.id) ? "Remove from Favorites" : "Add to Favorites"}</button>
        <p>Name: { game.title }</p>
        <p>Description: {game.short_description }</p>

        <p>Genre: { game.genre }</p>
        <p>Platform: { game.platform }</p>
        <a class="link" href={game.game_url}>Pruebalo aquí</a>
        <Star rating_value={rating_value} gameid ={game.id}/>
        {/if}
    </div>
</div>

<style>

    .img-game{
    width: 90%;
    height: 70%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;
}
.big-img-game{
    width: 25%;
    height: 25%;
    position: block;
    display: block;
    overflow: hidden;
    margin: 0;
    float: left;
}

    .link {
    color:slateblue;
    }


    h3 {
    margin: 0;
    }
    p {
    margin-top: 5px;
    margin-bottom: 5px;
    }

</style>