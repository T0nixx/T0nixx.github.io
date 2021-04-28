import axios from "axios"
const get_owned_games = (id:string): object => {
    // axios.get()
    const api_interface = "IPlayerService"
    const method = "GetRecentlyPlayedGames"
    const version = "1"

    const url = `https://api.steampowered.com/${api_interface}/${method}/v${version}/`

    
    return {}
}