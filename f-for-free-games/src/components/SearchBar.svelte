<script>
  import {
    platforms,
    genres,
    filterGames
  } from '../store.js';

  let selGenre, selPlatform = "NotSelected";
</script>

<style scoped>
  .wrapper {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
  }

  .bar-wrapper {
      display: grid;
      grid-template-columns: auto auto;
      align-items: flex-start;
  }

  .fixed-size {
      width: 50%;
      height: 50%;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 25%;
      margin-inline-end: 0px;
  }
</style>

<main>
  <div class="wrapper">
    <h3>Directorio de juegos</h3>
    <div class="bar-wrapper">
        <!-- svelte-ignore a11y-no-onchange -->
        <select bind:value={selGenre} on:change={filterGames(selGenre, selPlatform)} class="fixed-size">
            <option disabled selected>Filtra juegos por genero</option>
            <option value="NotSelected">Mostrar todos</option>
            {#each $genres as genre}
              <option value={genre} key={genre}>{genre}</option>
            {/each}
        </select>
        <!-- svelte-ignore a11y-no-onchange -->
        <select bind:value={selPlatform} on:change={filterGames(selGenre, selPlatform)} class="fixed-size">
            <option disabled selected>Filtra juegos por plataforma</option>
            <option value="NotSelected">Mostrar todos</option>
            {#each $platforms as platform}
              <option value={platform} key={platform}>{platform}</option>
            {/each}
        </select>
    </div>
  </div>
</main>