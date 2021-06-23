<script>
    import { star_array, changeRating } from '../store.js';

    export let rating_value;
    export let gameid;
</script>

<div>
    {#each star_array as value}
    <span
        class="{rating_value >= value ? 'fullstar' : 'emptystar'}"
        on:click={changeRating(gameid, value)}
    ></span>
    {/each}
</div>

<style>

	.emptystar::before {
        content: "☆";
        font-size: 250%;
    }

    .fullstar::before {
        content: "★";
        font-size: 250%;
        color: yellow;
    }

</style>