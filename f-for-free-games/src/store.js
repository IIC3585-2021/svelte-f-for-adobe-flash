import { writable } from 'svelte/store'


const endpoint = "https://free-to-play-games-database.p.rapidapi.com/api/games"


export const games = writable([])
export const selected_game = writable(0)
export const favorite_games = writable([])


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
    .then(res => games.update(games => ([...res])))

}