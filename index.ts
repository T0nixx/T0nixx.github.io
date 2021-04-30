import axios from 'axios';
import { WEB_API_KEY } from './config';
import * as qs from 'qs';

export const authenticate_open_id = async () => {
  const url = 'https://steamcommunity.com/openid/';

  const response = await axios.get(url);
  console.log(response);
  return response;
};

const get_owned_games = async (id: number): Promise<object> => {
  const api_interface = 'IPlayerService';
  const method = 'GetOwnedGames';
  const version = '1';

  const url = `https://api.steampowered.com/${api_interface}/${method}/v${version}/`;
  const query_string = qs.stringify({
    key: WEB_API_KEY,
    steamid: id,
    include_appinfo: false,
    include_played_free_games: true,
    appids_filter: 0,
  });

  const response = await axios.get(url + query_string);

  return response;
};

authenticate_open_id();
