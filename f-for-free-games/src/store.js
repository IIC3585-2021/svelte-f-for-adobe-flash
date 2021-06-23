import { writable } from 'svelte/store'


const endpoint = "https://free-to-play-games-database.p.rapidapi.com/api/games"


export const allGames = writable([]);
export const games = writable([]);

export const platforms = writable([]);
export const genres = writable([]);

export const selected_game = writable(0);
export const favorite_games = writable([]);


const default_op = {
    "method": "GET",
    "headers": {
    "x-rapidapi-key": "bcaae4d4e7msh27e491f251c173ap146987jsnd30a2590c37a",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "useQueryString": true
    }
}
export const fetchGames =  () => {fetch(endpoint, default_op)
    .then(aux => aux.json())
    .then(res => {
        games.update(() => ([...res]))
        allGames.update(games => ([...res]))
        setFilters([...res]);
    })
}

const setFilters = (games) => {
    let genresAux = new Set();
    let platformAux = new Set();
    games.map((game) => {
        platformAux.add(game.platform)
        genresAux.add(game.genre)
    });
    platforms.update(() => ([...platformAux]))
    genres.update(() => ([...genresAux]))
}

export const filterGames = (selGenre, selPlatform) => {
    let gamesAux;
    allGames.subscribe(v => {
        gamesAux = v;
    });

    if (selPlatform === "NotSelected" && selGenre === "NotSelected") {
        games.update(() => (gamesAux));
        setFilters(gamesAux);
    } else if (selPlatform === "NotSelected" && selGenre !== "NotSelected") {
        let filteredGames = gamesAux.filter((game) => game.genre === selGenre)
        console.log(selGenre);
        console.log(filteredGames)
        games.update(() => ([...filteredGames]))
        let platformAux = new Set();
        filteredGames.map((game) => {
            platformAux.add(game.platform)
        });
        platforms.update(() => ([...platformAux]))
    } else if (selPlatform !== "NotSelected" && selGenre === "NotSelected") {
        let filteredGames = gamesAux.filter((game) => game.platform === selPlatform)
        games.update(() => (filteredGames))
        let genresAux = new Set();
        filteredGames.map((game) => {
            genresAux.add(game.genre)
        });
        genres.update(() => ([...genresAux]))
    } else {
        games.update(() => (gamesAux.filter((game) => game.genre === selGenre &&  game.platform === selPlatform)))
    }
}

export const toggleReminder =  (gameid) => {
    selected_game.update(n => n === gameid ? 0 : gameid)

}