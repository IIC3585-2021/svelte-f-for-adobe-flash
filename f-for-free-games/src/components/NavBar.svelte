<script>
    import { selected_game, favorite_games, toggleReminder } from '../store.js'

    let selected_game_value
    selected_game.subscribe(value => {
		selected_game_value = value;
	});
</script>


<div>
    <div class="ui" id="js-ui">
    <nav class="scene_nav">
        <ol class="scene_nav_list">
        {#each $favorite_games as game_id}
            <li class="scene_nav_item" >
                <button on:click={toggleReminder(game_id)} class="scene_nav_button {selected_game_value === game_id ? 'o-active': 'o-inactive' }"></button> 
            </li>
        {/each}
        </ol>
    </nav>
    </div>
</div>

<style scoped>

.ui {
  margin-left: 1em;
}

.scene_nav {
  position: relative;
}
.scene_nav_list {
  display: flex;
  margin: 0;
  padding: 0;
  transform: scaleY(0.6);
}
.scene_nav_item {
  display: block;
}
.scene_nav_item:nth-child(even) {
  transform: scaleY(-1);
}
.scene_nav_item:not(:first-child) {
  margin-left: -8px;
}
.scene_nav_button {
  display: block;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: none;
  background: #0a7896;
  outline: none;
  cursor: pointer;
  transition: 500ms;
  -webkit-clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
          clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
}
.scene_nav_button.o-active {
  width: 160px;
  background: #64fafa;
}
.scene_nav_button:hover {
  background: #64fafa;
}
</style>