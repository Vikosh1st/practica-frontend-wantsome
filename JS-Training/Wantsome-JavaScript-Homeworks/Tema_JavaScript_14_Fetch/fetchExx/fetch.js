const url = "./world.json"
export const world = fetch(url).then(response => response.json());
