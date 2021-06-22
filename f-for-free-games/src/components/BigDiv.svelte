<script>
	import { selected_game, games } from '../store.js'
	import GameDiv from "./GameDiv.svelte"
</script>

<main>
    <div class="bigdiv">
        {#each $games as game}
        <div
            class="{selected_game === game.id ? 'gamebig' : 'game'}"
        >
            <GameDiv game= {game}/>
        </div>
        {/each}
    </div>



</main>

<style>
    .bigdiv {
    position: absolute;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: flex-start;
    width: 100%;
    height: 70%;
    margin-top:1em;
    margin-bottom:1em;
    box-sizing: border-box;
    overflow-y:scroll;
    overflow-x: hidden;
}
.game {
    width: 360px;
    height: 270px;
    margin-top: 5%;
    box-sizing: border-box;
    overflow-y:hidden;
    overflow-x: hidden;
}
.gamebig {
    grid-column-start: span 3;
    width: 100%;
    height: 100%;
    padding-left: 1%;
    margin-top: 1.25em;
    overflow-y: hidden;
    align-items: left;
    text-align: left;
    padding-top: 0;
    display: grid;
    grid-template-columns: 385px auto;
}
</style>
