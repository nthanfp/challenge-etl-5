import fetch from 'node-fetch';
import { question } from 'readline-sync';

const githubUser = (username) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {})
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

(async () => {
  try {
    var username = question('[?] Github username: ');
    const getUser = await githubUser(username);
    if (getUser.id) {
      console.log('========================');
      console.log(`[~] User ID: ${getUser.id}`);
      console.log(`[~] Name: ${getUser.name}`);
      console.log(`[~] Follower: ${getUser.followers}`);
      console.log(`[~] Following: ${getUser.following}`);
      console.log('========================');
    } else {
      console.log(`[!] User ${username} not found!`);
    }
  } catch (e) {
    console.log(`[!] Error: ${e}`);
  }
})();
