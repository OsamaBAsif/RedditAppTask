let baseUrl = 'https://api.reddit.com/r/pics/hot.json';

export const fetchSubReddits = async () => {
  return await fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
};
