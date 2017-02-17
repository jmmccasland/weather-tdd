export default function(weather) {
  const el = document.createElement('DIV');
  el.classList.add('forecast');

  el.innerHTML = `
    <p class="forecast__humidity"></p>
    <p class="forecast__summary"></p>
    <p class="forecast__temp"></p>`;

  el.querySelector('.forecast__summary').innerHTML = weather.summary;
  el.querySelector('.forecast__humidity').innerHTML = Math.round(weather.humidity * 100) + '%';
  el.querySelector('.forecast__temp').innerHTML = Math.round(weather.temperature) + 'ºF';

  return el;
};
