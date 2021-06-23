<script>
	import { selected_game, games } from '../store.js'
	import GameDiv from "./GameDiv.svelte"

    let selected_game_value;

    selected_game.subscribe(value => {
		selected_game_value = value;
	});
</script>

<main>
    <div class="bigdiv">
        {#each $games as game}
        <div
            class="{selected_game_value === game.id ? 'gamebig' : 'game'}"
        >
            <GameDiv game= {game} selected_game_value = {selected_game_value}/>
        </div>
        {/each}
    </div>



</main>

<style>
.bigdiv {
    position: fixed;
    max-height: 60%;
    min-height: 60%;
    min-width: 90%;
    border-style: solid;
    border-color: chocolate;
    box-sizing: border-box;
    overflow-y:scroll;
}
.game {
    position: relative;
    display: inline-block;
    width: 21%;
    height:20%;
    padding-left: 1%;
    margin-top: 5%;
    box-sizing: border-box;
    overflow-y:hidden;
}
.gamebig {
    position: relative;
    display: inline-block;
    width: 100%;
    height:100%;
    padding-left: 1%;
    margin-top: 5%;
    box-sizing: border-box;
    overflow-y:hidden;
}
</style>
