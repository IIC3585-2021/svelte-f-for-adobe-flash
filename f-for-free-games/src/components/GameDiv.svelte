<script>
    export let game;
</script>

<div>
    <img
        alt = ""
        class="img-game"
        src={game.thumbnail}
    >
    <div class="text">
        <h3>
            { game.title}
        </h3>
        <p>Name: { game.title }</p>
        <p>Description: {game.short_description }</p>

        <p>Genre: { game.genre }</p>
        <p>Platform: { game.platform }</p>
        <a class="link" href={game.game_url}>Pruebalo aquí</a>
    </div>
</div>

<style>

    .img-game{
        width: 365px;
        height: 206px;
    
        overflow: hidden;
        margin: 0;
    }
    
    .big-img-game{
        width: 365px;
        height: 206px;
    
        overflow: hidden;
        margin: 0;
        margin-right: 1em;
        float: left;
    }
    
    .text {
        position: relative;
    }
    
    .link {
        color:slateblue;
    }
    
</style>