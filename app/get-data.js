export default function (lat, lng) {
  return fetch(`https://api.darksky.net/forecast/${process.env.API_KEY}/${lat},${lng}`)
    .then(res => res.json());
}
