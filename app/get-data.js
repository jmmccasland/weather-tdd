export default function (lat, lng) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/311bf310a229a347973348d2221b7956/${lat},${lng}`)
    .then(res => res.json());
}
