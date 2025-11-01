import { BASE_URL } from '../constant/base';

export async function GetAllCites() {
  let data = await fetch(`${BASE_URL}city`);
  let res = await data.json();
  return res;
}
